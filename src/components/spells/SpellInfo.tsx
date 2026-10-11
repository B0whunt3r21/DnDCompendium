import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { fetchData } from "../../API";
import { SpellHandler } from "./SpellHandler";

function SpellInfo() {
  const { spellIndex } = useParams<{ spellIndex: string }>();
  const [spell, setSpell] = useState<any>(null);

  useEffect(() => {
    if (spellIndex) {
      fetchData(`/spells/${spellIndex}`).then((data) => setSpell(data));
    }
  }, [spellIndex]);

  if (!spell) return <div className="text-white p-3">Loading details...</div>;

  const spellHandler = new SpellHandler(spell);

  return (
    <div className="card w-75">
      <h5 className="card-header">{spell.name}</h5>
      <div
        className="card-body col-md-12 d-flex flex-column flex-wrap"
        style={{ maxHeight: "25vh" }}
      >
        <p className="m-2">
          <strong>Level:</strong> {spell.level}
        </p>
        <p className="m-2">
          <strong>Components:</strong> {spell.components}
        </p>
        <p className="m-2">
          <strong>Range:</strong> {spell.range}
        </p>
        <p className="m-2">
          <strong>Casting time:</strong> {spell.casting_time}
        </p>
        <p className="m-2">
          <strong>Duration:</strong> {spell.duration}
        </p>
        <p className="m-2">
          <strong>School:</strong> {spellHandler.school?.name}
        </p>
      </div>
      <div
        className="card-text overflow-y-auto border-top"
        style={{ maxHeight: "50vh" }}
      >
        {spell.description}
      </div>
    </div>
  );
}

export default SpellInfo;
