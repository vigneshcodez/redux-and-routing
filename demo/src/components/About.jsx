import { Link, Outlet } from "react-router-dom"

const About = () => {
  return (
    <>
    <div>About</div>
    <Link to=".">back</Link>
    <Link to="common">go common</Link>
    <Link to="personal"> go personal</Link>
    <Outlet/>
    </>
  )
}

export default About