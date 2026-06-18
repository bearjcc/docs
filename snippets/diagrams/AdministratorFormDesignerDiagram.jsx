import { DiagramFrame, RegionBox } from '/snippets/diagrams/RegionBox.jsx';

export const AdministratorFormDesignerDiagram = ({ highlight }) => (
  <DiagramFrame
    title="Web Form Designer view"
    subtitle="FormDesignerView (IView in ContentHost)"
  >
    <div className="flex min-w-[640px] flex-col gap-2">
      <RegionBox
        variant="yellow"
        title="View Command Manager"
        code="IViewEnvironment.CommandBarManager"
        className="min-h-[2.5rem]"
        highlight={highlight === 'vbar'}
      />
      <RegionBox
        variant="white"
        title="Forms list band"
        code="FormListRow / FormsListSplitter"
        className="min-h-[2rem]"
      />
      <div className="grid grid-cols-12 gap-1">
        <RegionBox
          variant="blue"
          title="Control tree column"
          code="ControlTreeView (CommandTreeView)"
          className="col-span-3 min-h-[14rem]"
          highlight={highlight === 'tree'}
        />
        <RegionBox
          variant="yellow"
          title="Form designer canvas"
          code="WebFormDesigner (WebView2) · DesignerContextMenu"
          className="col-span-6 min-h-[14rem]"
          highlight={highlight === 'canvas'}
        />
        <RegionBox variant="splitter" code="PropertyGridSplitter" className="col-span-1 min-h-[14rem]" />
        <RegionBox
          variant="yellow"
          title="Property grid"
          code="PropertyGridHost · DesignerPropertyGrid"
          className="col-span-2 min-h-[14rem]"
          highlight={highlight === 'grid'}
        />
      </div>
    </div>
  </DiagramFrame>
);
