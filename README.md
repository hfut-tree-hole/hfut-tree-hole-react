# HFUT-TREE-HOLE

# 合肥工业大学树洞(前端)

# 🚀
- [在线演示地址](https://hungry-bose-d83723.netlify.app/)

# 📦目录结构
## 目前结构只相当于一个草稿，仅供参考，估计于2022.3.20日前完成目录结构
```
|src
│-- App.css
│-- App.tsx
│-- config.ts
│-- favicon.svg
│-- index.css
│-- logo.svg
│-- main.tsx
│-- vite-env.d.ts
│
├─assets
│  ├─imgs
│  │      logo.png
│  │
│  └─scss
│          mixins.scss
│          override.scss
│          variables.scss
│
├─components
│  ├─base
│  │      BaseList.tsx
│  │
│  ├─Footer
│  │      Drawer.tsx
│  │
│  └─Searchbar
│          Drawer.tsx
│
├─context
│      SettingsContext.tsx
│
├─hooks
│      use-create-shared.ts
│      use-event.ts
│      use-media-query.ts
│      use-mount.ts
│      use-response.ts
│      use-settings.ts
│      use-unmount.ts
│      use-window-size.ts
│      useLocalStorage.ts
│
├─layouts
│  └─AppLayout
│      │  AppLayout.tsx
│      │  use-drawer.ts
│      │
│      ├─Drawer
│      │      DrawerHeader.tsx
│      │      Drawer.tsx
│      │
│      └─Header
│              Header.tsx
│
├─pages
│  └─Login
│          Drawer.tsx
│
├─plugins
│      wydr.ts
│
├─route
│      Drawer.tsx
│
├─service
│      base.ts
│      interceptor.ts
│      test.ts
│
├─shared
│  │  constant.ts
│  │  types.ts
│  │
│  ├─config
│  │      service.ts
│  │
│  └─rxjs
│          mode-listener.ts
│
├─svg
│  └─icon
│          blog.tsx
│          calendar.tsx
│          creatSVGIcon.tsx
│          menu.tsx
│          search.tsx
│
└─theme
│  Drawer.tsx
│
├─overrides 组件样式重写
│      Accordion.ts
│      Alert.tsx
│      Autocomplete.ts
│      Avatar.ts
│      Backdrop.ts
│      Badge.ts
│      Breadcrumbs.ts
│      Button.ts
│      ButtonGroup.ts
│      Card.ts
│      Checkbox.tsx
│      Chip.tsx
│      ControlLabel.ts
│      CssBaseline.ts
│      CustomIcons.tsx
│      DataGrid.ts
│      Dialog.ts
│      Drawer.ts
│      Fab.ts
│      IconButton.ts
│      index.ts
│      Input.ts
│      Link.ts
│      List.ts
│      LoadingButton.ts
│      Menu.ts
│      Pagination.ts
│      Paper.ts
│      Popover.ts
│      Progress.ts
│      Radio.ts
│      Rating.tsx
│      Select.ts
│      Skeleton.ts
│      Slider.ts
│      Stepper.ts
│      SvgIcon.ts
│      Switch.ts
│      Table.ts
│      Tabs.ts
│      Timeline.ts
│      ToggleButton.ts
│      Tooltip.ts
│      TreeView.tsx
│      Typography.ts
│
├─theme-config 主题配置
│      breakpoints.ts
│      palette.ts
│      shadows.ts
│      typography.ts
│
└─utils
cssStyles.ts
getColorPresets.ts
getFontVal.ts


```
