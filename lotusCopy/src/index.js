export { default as StyleReset } from "./atoms/StyleReset";
export { default as Container } from "./atoms/grid/Container";
export { default as Row } from "./atoms/grid/Row";
export { default as Col } from "./atoms/grid/Col";
export { default as Div } from "./atoms/div/Div";
export { iconPaths } from "./atoms/icon/iconPaths";
export { default as Icon } from "./atoms/icon/Icon";
export { default as Text } from "./atoms/text/Text";
export { default as Button } from "./atoms/button/Button";
export { default as Input } from "./atoms/input/Input";
export { default as Textarea } from "./atoms/input/Textarea";
export { default as Label } from "./atoms/label/Label";
export { default as Checkbox } from "./atoms/checkbox/Checkbox";
export { default as Radiobox } from "./atoms/radiobox/Radiobox";
export { default as Switch } from "./atoms/checkbox/Switch";
export { default as Image } from "./atoms/image/Image";
export { default as Tag } from "./atoms/tag/Tag";
export { default as Anchor } from "./atoms/anchor/Anchor";
export { default as Collapse } from "./atoms/collapse/Collapse";
export { default as Modal } from "./atoms/modal/Modal";
export { default as SideDrawer } from "./atoms/sidedrawer/SideDrawer";
export { default as Notification } from "./atoms/notification/Notification";
export { default as Dropdown } from "./atoms/dropdown/Dropdown";
// export { default as Avatar } from "./atoms/Avatar";
// export { default as ButtonGroup } from "./atoms/ButtonGroup";
// export { default as DropdownMenu } from "./atoms/DropdownMenu";
// export { default as InputGroup } from "./atoms/InputGroup";
// export { default as Tab } from "./atoms/Tab";
export { default as scrollTo } from "./functions/scrollTo";
export { default as currentDevice } from "./functions/currentDevice";

export { ThemeProvider } from "./core/ThemeContext";
// export { default as DefaultTheme } from "./styles/DefaultTheme";

// export { App } from "./pages/home.js";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
