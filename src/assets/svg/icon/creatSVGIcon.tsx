import type { SVGAttributes } from 'react'

export interface SVGIconProps extends SVGAttributes<any> {

}

export function SVGIcon(props: SVGIconProps) {
  return <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    role="img"
    className={'text-inherit'}
    width="1em"
    height="1em"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 24 24"
    {...props}
  />
}
