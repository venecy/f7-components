import cc from 'classnames'
import { runEnter, runExit } from './run-transition'

/**
 * @typedef {Object} CSSTransitionProps
 * @prop {string} [enter]
 * @prop {string} [enterActive]
 * @prop {string} [exit]
 * @prop {string} [exitActive]
 *
 * @param {CSSTransitionProps} props
 * @param {JSX.Element[]} children
 */
const CSSTransition = (props, children) => {
  const {
    enter,
    enterActive = `${enter}-active`,
    exit,
    exitActive = `${exit}-active`
  } = props

  const child = children[0]

  if (!child.attributes) {
    return child
  }

  const attr = child.attributes
  let replaceAttr = {}

  if (enter) {
    replaceAttr.class = cc(attr.class, { [enter]: enter })
    replaceAttr.oncreate = (el) => {
      if (enter) {
        runEnter(el, enterActive, enter)
      }
      if (attr.oncreate) {
        attr.oncreate(el)
      }
    }
  }

  if (exit) {
    replaceAttr.onremove = (el, done) => {
      if (exit) {
        runExit(el, exitActive, exit, done)
      }
      if (attr.onremove) {
        attr.onremove(el, () => { })
      }
    }
  }

  return {
    ...child,
    attributes: {
      ...attr,
      ...replaceAttr
    }
  }
}

export default CSSTransition