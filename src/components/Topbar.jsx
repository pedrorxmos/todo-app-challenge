import { Outlet } from "react-router"


export const Topbar = () => {

  return (
    <>
        <h1>#todo</h1>
        <div className="menu">
          <a href="" className="menu-item active">
            All
            <div className="menu-item-border"></div>
          </a>

          <a href="/active" className="menu-item">
            Active
            <div className="menu-item-border"></div>
          </a>

          <a href="/completed" className="menu-item">
            Completed
            <div className="menu-item-border"></div>
          </a>
        </div>

        <Outlet/>
    </>
  )
}