import { DiagramFrame, RegionBox } from '/snippets/diagrams/RegionBox.jsx';

export const AdministratorRulesBuilderDiagram = ({ highlight }) => (
  <DiagramFrame
    title="Rules Builder window"
    subtitle="RulesBuilderFormWpf (modal Window, not in ContentHost)"
  >
    <div className="flex min-w-[640px] flex-col gap-2">
      <RegionBox
        variant="yellow"
        title="Rules Builder toolbar"
        code="MainCommandBar"
        className="min-h-[2.5rem]"
        highlight={highlight === 'toolbar'}
      />

      <RegionBox variant="purple" title="Main editor area" className="p-2">
        <div className="mt-1 grid grid-cols-12 gap-1">
          <RegionBox
            variant="blue"
            title="Rule editor"
            code="RuleEditor (RuleEditorTextBox) · WarningContainer"
            className="col-span-7 min-h-[12rem]"
            highlight={highlight === 'editor'}
          />
          <RegionBox variant="splitter" code="MainVerticalSplitter" className="col-span-1 min-h-[12rem]" />
          <RegionBox
            variant="white"
            title="Side tab panel"
            code="SideTabPanel · Forms / Variables / Constants / Messages"
            className="col-span-4 min-h-[12rem]"
            highlight={highlight === 'side'}
          />
        </div>
      </RegionBox>

      <RegionBox variant="splitter" code="MainHorizontalSplitter" className="min-h-[0.5rem]" />

      <RegionBox
        variant="green"
        title="Lower tab panel"
        code="LowerTabPanel · Help / Values / Steps / DrillDown / Function"
        className="min-h-[4rem]"
        highlight={highlight === 'lower'}
      />
    </div>
  </DiagramFrame>
);
