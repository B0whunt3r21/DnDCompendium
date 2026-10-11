import { useState } from "react";
import SideBar from "../SideBar";
import { Outlet } from "react-router-dom";

const SpellFilter = {
  ALL: "/spells",
  WIZARD: "/classes/wizard/spells",
  CLERIC: "/classes/cleric/spells",
  DRUID: "/classes/druid/spells",
  BARD: "/classes/bard/spells",
  PALADIN: "/classes/paladin/spells",
  RANGER: "/classes/ranger/spells",
  SORCERER: "/classes/sorcerer/spells",
  WARLOCK: "/classes/warlock/spells",
} as const;

type SpellFilter = (typeof SpellFilter)[keyof typeof SpellFilter];

function Spells() {
  const [filter, setFilter] = useState<SpellFilter>(SpellFilter.ALL);

  function handleFilter(Filter: SpellFilter) {
    setFilter(Filter);
  }

  return (
    <div className="">
      <div className="row align-items-center">
        <div className="col-12 col-md-4 d-flex justify-content-center">
          <SideBar title="Spell list" endpoint={filter} key={filter} />
        </div>
        <div className="col-12 col-sm-1 d-flex">
          <div className="d-flex flex-column">
            <div
              className="border border-1 my-1"
              onClick={() => handleFilter(SpellFilter.ALL)}
            >
              All
            </div>
            <img
              src="/img/Wizard.png"
              alt="Wizard"
              width="50"
              height="50"
              className="border border-1 my-1"
              onClick={() => handleFilter(SpellFilter.WIZARD)}
            />
            <img
              src="/img/Cleric.png"
              alt="Cleric"
              width="50"
              height="50"
              className="border border-1 my-1"
              onClick={() => handleFilter(SpellFilter.CLERIC)}
            />
            <img
              src="/img/Druid.png"
              alt="Druid"
              width="50"
              height="50"
              className="border border-1 my-1"
              onClick={() => handleFilter(SpellFilter.DRUID)}
            />
            <img
              src="/img/Bard.png"
              alt="Bard"
              width="50"
              height="50"
              className="border border-1 my-1"
              onClick={() => handleFilter(SpellFilter.BARD)}
            />

            <img
              src="/img/Paladin.png"
              alt="Paladin"
              width="50"
              height="50"
              className="border border-1 my-1"
              onClick={() => handleFilter(SpellFilter.PALADIN)}
            />
            <img
              src="/img/Ranger.png"
              alt="Ranger"
              width="50"
              height="50"
              className="border border-1 my-1"
              onClick={() => handleFilter(SpellFilter.RANGER)}
            />
            <img
              src="/img/Sorcerer.png"
              alt="Sorcerer"
              width="50"
              height="50"
              className="border border-1 my-1"
              onClick={() => handleFilter(SpellFilter.SORCERER)}
            />
            <img
              src="/img/Warlock.png"
              alt="Warlock"
              width="50"
              height="50"
              className="border border-1 my-1"
              onClick={() => handleFilter(SpellFilter.WARLOCK)}
            />
          </div>
        </div>
        <div className="col-12 col-md-7 d-flex justify-content-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Spells;
