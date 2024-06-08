import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <rect
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'h-8 transition-all duration-300',
          invert ? 'fill-white' : 'fill-white',
          filled ? 'w-8' : 'w-0 group-hover/logo:w-8',
        )}
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-white'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M3.25 26v.75H7c1.305 0 2.384-.21 3.346-.627.96-.415 1.763-1.02 2.536-1.752.695-.657 1.39-1.443 2.152-2.306l.233-.263c.864-.975 1.843-2.068 3.071-3.266 1.209-1.18 2.881-1.786 4.621-1.786h5.791V5.25H25c-1.305 0-2.384.21-3.346.627-.96.415-1.763 1.02-2.536 1.751-.695.658-1.39 1.444-2.152 2.307l-.233.263c-.864.975-1.843 2.068-3.071 3.266-1.209 1.18-2.881 1.786-4.621 1.786H3.25V26Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}


const LogoWithBG = () => (
  <svg version="1.2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 954 414" width="954" height="414">
    <title>logo with BG-ai</title>
 
    <g id="Layer 2"></g>
    <g id="Layer 1">
      <g id="<Group>">
        <g id="<Group>">
          <g id="<Group>">
            <path id="<Path>" className="s0" d="m270.7 310c0.2 19.8-23.4 30.3-37.9 16.8l-87.8-82.2q-0.1 0-0.1 0l-3.9-3.7-36-33.6c-4.7-4.4-7-10.2-7.1-16-0.1-8.4 4.5-16.8 13.1-20.8l47.8-22.1c-4.9 5.4-8.8 12.3-9.9 19.7-1.2 7.4-0.1 18.2 10.8 29.1l3.1 2.9 24.9 23.3 35 32.7 2.6 2.4v-0.2q1.1 1 2.3 1.9 0.6 0.4 1.3 0.8 0.2 0.2 0.4 0.3 0.9 0.6 1.9 1 0.9 0.5 1.9 0.9 0.2 0.1 0.4 0.2 0.8 0.3 1.6 0.5c1.6 0.5 3.2 0.9 4.9 1 0.1 0.1 0.1 0 0.1 0q0.4 0.1 0.9 0.1 0.9 0.1 1.8 0.1h0.6c4.6 0 8.9-1.2 12.6-3.3 0.7-0.4 1.4-0.8 2.1-1.3 3-2.1 5.5-4.7 7.4-7.7q0.6-0.8 1.1-1.7c2-3.8 3.1-8 3.1-12.6l0.3 20.4 0.1 3.8z" />
          </g>
          <g id="<Group>">
            <path id="<Path>" className="s0" d="m322.1 135.6c-3.5 9.4-13 15.3-25 15.6l-26-24.5-28.6-27.2c-0.1 0-0.1-0.1-0.1-0.1-0.3-0.2-0.4-0.4-0.7-0.6-0.2-0.2-0.4-0.4-0.6-0.6-2.4-2.1-5.4-4.1-8.8-5.6 0 0-0.1 0-0.2 0-7.2-3.2-16.2-4.5-24.5-2.1-4.2 1.3-8.9 3.6-12.9 8.1l11.6-48.5c4-16.8 24.8-22.9 37.3-11.1l62.8 59.5 1.4 1.3 4.9 4.6c9.6 10.2 13.1 21.5 9.4 31.2z" />
            <path id="<Path>" className="s0" d="m241.1 101.2c0.2 0.2 0.4 0.4 0.6 0.6l-0.6-0.6z" />
          </g>
          <g id="<Group>">
            <path id="<Path>" className="s0" d="m366.8 167.9c0.1 9.9-6.2 19.6-17.2 22.3l-62.9 15.2c-10.2 2.5-17.3 11.6-17.1 22.1l0.1 10.7v0.3c0 4.6-1.1 8.8-3.1 12.6q-0.5 0.9-1.1 1.7c-1.9 3-4.4 5.6-7.4 7.7q-1 0.7-2.1 1.3c-3.7 2.1-8 3.3-12.6 3.3h-0.6q-0.9 0-1.8-0.1-0.5 0-0.9-0.1c0 0 0 0.1-0.1 0-1.7-0.1-3.3-0.5-4.9-1q-0.8-0.2-1.6-0.5-0.2-0.1-0.4-0.2-1-0.4-1.9-0.9-1-0.4-1.9-1-0.2-0.1-0.4-0.3-0.7-0.4-1.3-0.8-1.2-0.9-2.3-1.9l-0.1-4.1-0.3-26.1q-0.1-4.8 0.5-9.6c1.6-11.7 6.2-23 13.6-32.4 9.3-12 22.5-20.6 37.2-24.2l19-4.5h0.6c13.8 0 25.2-6.9 29.2-17.7 2.6-6.9 2.1-14.4-1.4-21.9l36.1 34.2c4.8 4.5 7 10.2 7.1 15.9z" />
          </g>
          <g id="<Group>">
            <path id="<Path>" className="s0" d="m240.2 104.8l-7.7 30.6c-0.3 1.4-0.7 2.7-1.1 4-1.3 4.6-3.2 8.8-5.4 12.9-2.8 5.1-6.3 9.8-10.3 14-5.7 5.9-12.5 10.8-20.3 14.4l-32.7 15.1c-8.5-8.2-12.3-17.6-10.8-27.3 2-12.1 11.3-21.5 18.6-25.5l1.2-0.6 4.9-2.3c6.3-2.8 10.9-8.4 12.5-15.1l0.2-1.2 1.8-7 1.3-5.6c4-9.2 10.6-13.1 16.1-14.7 11.7-3.3 25.5 1.5 31.7 8.3z" />
          </g>
        </g>
        <text transform="matrix(1,0,0,1,559.85,266.809)">
          <tspan x="-267.3" y="0" className="t1" dx="0 17 17 17 17 17 17 17 17">MESHKATI</tspan>
        </text>
      </g>
    </g>
  </svg>
);

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      {/* <path
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        d="M52.928 23.716c5.184 0 7.992-1.992 7.992-5.28 0-3.888-2.688-4.8-7.512-5.376-3.36-.408-4.728-.672-4.728-2.448 0-1.464 1.44-2.376 3.912-2.376 2.4 0 3.936.864 4.104 2.784h3.576c-.24-3.288-3-5.232-7.536-5.232-4.728 0-7.68 1.896-7.68 5.208 0 3.48 2.712 4.464 7.416 5.04 3.216.408 4.8.648 4.8 2.664 0 1.584-1.392 2.544-4.224 2.544-3.048 0-4.68-1.176-4.752-3.288H44.6c.072 3.408 2.616 5.76 8.328 5.76Zm14.175-.216h3.312v-2.928h-1.968c-.84 0-1.272-.24-1.272-1.104v-6.144h3.24v-2.592h-3.24V6.676l-3.36.648v3.408h-2.496v2.592h2.496v7.2c0 2.04 1.248 2.976 3.288 2.976Zm10.078.216c2.16 0 4.104-1.008 4.944-2.64h.168l.144 2.424h3.288V10.732h-3.432v6.336c0 2.4-1.584 4.032-3.984 4.032-2.328 0-3.264-1.368-3.264-3.936v-6.432h-3.432v7.032c0 4.416 2.256 5.952 5.568 5.952Zm16.24.048c2.52 0 4.2-1.008 4.944-2.496h.168l.072 2.232h3.264V6.004h-3.408v7.008h-.168c-.792-1.56-2.592-2.52-4.848-2.52-3.816 0-6.384 2.592-6.384 6.624 0 4.056 2.568 6.648 6.36 6.648Zm1.032-2.616c-2.472 0-3.96-1.536-3.96-4.032s1.488-4.008 3.96-4.008 3.984 1.512 3.984 3.648v.744c0 2.136-1.536 3.648-3.984 3.648Zm9.485-12.216h3.408V6.004h-3.408v2.928Zm0 14.568h3.408V10.732h-3.408V23.5Zm12.481.24c4.584 0 7.56-2.52 7.56-6.624 0-4.152-3-6.624-7.56-6.624s-7.56 2.52-7.56 6.624c0 4.128 3.024 6.624 7.56 6.624Zm0-2.64c-2.592 0-4.128-1.56-4.128-3.984s1.536-3.984 4.128-3.984c2.616 0 4.152 1.536 4.152 3.984 0 2.424-1.56 3.984-4.152 3.984Zm8.794 2.4h3.384v-2.88h-3.384v2.88Z"
      /> */}
      <LogoWithBG />
    </svg>
  )
}
