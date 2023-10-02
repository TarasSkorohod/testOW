import { WindowTintPages } from "@/components/ourServices/windowTintPages/WindowTintPages";
import { DoubleSidedCard } from "@/components/doubleSidedCard/DoubleSidedCard";
import { listXpel } from "@/data/xpelData";

export default function WindowTint() {
  return (
    <div>
      <WindowTintPages />
      <DoubleSidedCard title="title" list={listXpel} />
    </div>
  );
}
