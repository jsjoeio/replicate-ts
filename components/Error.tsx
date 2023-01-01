type ErrorProps = {
    error: null | string
}
export function Error({error}: ErrorProps) {
      return <>{error && <div>{error}</div>}</>
}