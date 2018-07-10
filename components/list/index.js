// eslint-disable-next-line
import { h } from 'hyperapp'
import cc from 'classnames'

/**
 * List block
 * @typedef {Object} ListProps
 * @prop {boolean} [inset=false]
 * @prop {string} [label]
 * @prop {boolean} [useForm]
 * @prop {boolean} [noHairlines]
 * @prop {boolean} [noHairlinesBetween]
 *
 * @param {ListProps} props
 * @param {JSX.Element[]} children
 */
const List = (props, children) => {
  const {
    inset,
    label,
    noHairlines,
    noHairlinesBetween,
    useForm,
    ...rests
  } = props

  const wraperCls = cc(rests.class, 'list-block', {
    inset,
    'no-hairlines': noHairlines,
    'no-hairlines-between': noHairlinesBetween
  })
  const WraperEl = useForm ? 'form' : 'div' // eslint-disable-line

  return (
    <WraperEl {...rests} class={wraperCls}>
      <ul>
        {children.map(child => (
          <li key={child.key}>{child}</li>
        ))}
      </ul>
      {label && <div class="list-block-label">{label}</div>}
    </WraperEl>
  )
}

export default List

/**
 * @typedef {Object} ItemWraperProps
 * @prop {boolean} [isLink]
 * @prop {boolean} [alignTop]
 * @prop {boolean} [useLabel]
 * @prop {JSX.Element} [contentStart]
 * @prop {JSX.Element} [media]
 * @prop {JSX.Element} [title]
 * @prop {JSX.Element} [input]
 * @prop {JSX.Element} [after]
 * @prop {JSX.Element} [subTitle]
 * @prop {JSX.Element} [text]
 *
 * @param {ItemWraperProps} props
 * @param {JSX.Element[]} children
 */
export const ListItem = (props, children) => {
  const {
    isLink,
    alignTop,
    useLabel,
    contentStart,
    media,
    title = children,
    input,
    after,
    subTitle,
    text,
    ...wraperProps
  } = props

  const isMedia = !!(subTitle || text)

  const wraperCls = cc(wraperProps.class, 'item-content', {
    'item-link': isLink,
    'align-top': alignTop,
    'media-item': isMedia
  })
  const WraperEl = useLabel ? 'label' : 'div' // eslint-disable-line

  return (
    <WraperEl {...wraperProps} class={wraperCls}>
      {contentStart}
      {media && <div key="media" class="item-media">{media}</div>}
      <div key="inner" class="item-inner">
        {isMedia
          ? [
            <div key="row" class="item-title-row">
              {renderTitle(title, input, after)}
            </div>,
            <div key="sub" class="item-subtitle">{subTitle}</div>,
            text && <div key="text" class="item-text">{text}</div>
          ]
          : renderTitle(title, input, after)
        }
      </div>
    </WraperEl>
  )
}

const renderTitle = (title, input, after) => {
  return [
    <div key="title" class={cc('item-title', { label: !!input })}>{title}</div>,
    input && <div class="item-input">{input}</div>,
    <div key="after" class="item-after">{after}</div>
  ]
}