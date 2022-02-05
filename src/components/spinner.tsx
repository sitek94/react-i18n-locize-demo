import './spinner.css'

export function Spinner() {
  return (
    <div className="lds-ellipsis">
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

export function OverlaySpinner() {
  return (
    <div className="overlay-spinner">
      <Spinner />
    </div>
  )
}
