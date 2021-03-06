// eslint-disable-next-line
import { h } from 'hyperapp'
import cc from 'classnames'
// import './index.less'

/**
 * @typedef {Object} PageProps
 * @prop {JSX.Element} [navbar]
 * @prop {JSX.Element} [toolbar]
 * @prop {JSX.Element} [outside]
 *
 * @param {PageProps} props
 * @param {JSX.Element[]} children
 */
const Page = (props, children) => {
  const {
    navbar,
    toolbar,
    outside,
    ...restProps
  } = props

  return (
    <div {...restProps} class={cc('page', restProps.class, {
      'navbar-fixed': !!navbar,
      'toolbar-fixed': !!toolbar
    })}>
      {navbar}
      <div key='content' class="page-content">{children}</div>
      {toolbar}
      {outside}
    </div>
  )
}

export default Page
