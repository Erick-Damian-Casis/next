import Link from "next/link";
import {useRouter} from "next/router";

const style={
    color: 'red'
}
export const ActiveLink = ({href, title}) => {
    const {asPath} = useRouter()

  return(
      <Link style={asPath===href ? style : null} href={href}>
          {title}
      </Link>
  )
}
