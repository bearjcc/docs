import { DiagramFrame, RegionBox } from '/snippets/diagrams/RegionBox.jsx';

export const AdministratorShellDiagram = ({ highlight }) => (
  <DiagramFrame
    title="Application window"
    subtitle="SolidWorksWindow / MainWindow"
  >
    <div className="flex min-w-[640px] flex-col gap-2">
      <RegionBox
        variant="blue"
        title="Title bar chrome"
        code="TitleCommandBarBacking"
        className="p-2"
      >
        <div className="mt-1 grid grid-cols-12 gap-1">
          <RegionBox variant="white" code="ApplicationIconButton" className="col-span-1 min-h-[2rem]" />
          <RegionBox variant="white" code="ApplicationName" className="col-span-2 min-h-[2rem]" />
          <RegionBox
            variant="yellow"
            title="QuickBar"
            code="QuickBar · IQuickBarManager"
            className="col-span-6 min-h-[2rem]"
            highlight={highlight === 'quickbar'}
          />
          <RegionBox
            variant="white"
            title="Window buttons"
            code="WindowsButtonsBar"
            className="col-span-3 min-h-[2rem]"
          />
        </div>
      </RegionBox>

      <RegionBox
        variant="yellow"
        title="Command Manager"
        code="CommandBar · ICommandBarManager + IViewCommandBarManager"
        className="min-h-[2.5rem]"
        highlight={highlight === 'commandbar'}
      />

      <RegionBox variant="purple" title="Application body" code="ApplicationBodyGrid" className="p-2">
        <div className="mt-1 grid grid-cols-12 gap-1">
          <RegionBox
            variant="yellow"
            title="ToDo tree (left sidebar)"
            code="ToDo (TreeView) · ViewTreeViewModel · IViewManager"
            className="col-span-3 min-h-[12rem]"
            highlight={highlight === 'todo'}
          />
          <RegionBox variant="splitter" code="TodoSplitter" className="col-span-1 min-h-[12rem] items-center justify-center" />
          <RegionBox
            variant="yellow"
            title="Content host"
            code="ContentHost (DockPanel) · active IView"
            className="col-span-8 min-h-[12rem]"
            highlight={highlight === 'content'}
          />
        </div>
      </RegionBox>

      <RegionBox
        variant="green"
        title="Status bar"
        code="StatusBar · IStatusBarService"
        className="min-h-[2.5rem]"
        highlight={highlight === 'status'}
      />
    </div>
  </DiagramFrame>
);
