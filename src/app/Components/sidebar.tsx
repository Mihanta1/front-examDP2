const SideBar = () => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-8 fixed">
          {/* Sidebar content here */}
          <li>
            <a href="/">Product</a>
          </li>
          <li>
            <a href="/Equipment">Equipment</a>
          </li>
          <li>
            <a href="/Materials">Material</a>
          </li>
          <li>
            <a href="/Operation">Operation</a>
          </li>
          <li>
            <a href="/Order">Order</a>
          </li>
          <li>
            <a href="">Product Plan</a>
          </li>
          <li>
            <a href="">Component</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
