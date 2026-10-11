import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import { fetchData, getImageLink } from "../../API";
import { MonsterHandler } from "./MonsterHandler";

function MonsterInfo() {
  const { monsterIndex } = useParams<{ monsterIndex: string }>();
  const [monster, setmonster] = useState<any>(null);

  useEffect(() => {
    if (monsterIndex) {
      fetchData(`/monsters/${monsterIndex}`).then((data) => setmonster(data));
    }
  }, [monsterIndex]);

  if (!monster) return <div className="text-white p-3">Loading details...</div>;

  const monsterHandler = new MonsterHandler(monster);

  return (
    <div className="card w-75">
      <h5 className="card-header">{monster.name}</h5>
      <div className="row g-0">
        <div className="col-md-4 justify-content-center">
          <img
            src={getImageLink(monster.image)}
            className="img-fluid"
            style={{ maxHeight: "25vh" }}
            alt={monster.name}
          ></img>
        </div>
        <div
          className="card-body col-md-8 d-flex flex-column flex-wrap"
          style={{ maxHeight: "25vh" }}
        >
          <p className="m-2">
            <strong>HP:</strong> {monster.hit_points}
          </p>
          <p className="m-2">
            <strong>AC:</strong> {monsterHandler.monsterAC}
          </p>
          <p className="m-2">
            <strong>CR:</strong> {monster.challenge_rating}
          </p>
          <p className="m-2">
            <strong>CON:</strong> {monster.constitution}
          </p>
          <p className="m-2">
            <strong>INT:</strong> {monster.intelligence}
          </p>
          <p className="m-2">
            <strong>DEX:</strong> {monster.dexterity}
          </p>
          <p className="m-2">
            <strong>CHA:</strong> {monster.charisma}
          </p>
          <p className="m-2">
            <strong>STR:</strong> {monster.strength}
          </p>
        </div>
      </div>
      <div
        className="card-body overflow-y-auto border-top"
        style={{ maxHeight: "25vh" }}
      >
        {monsterHandler.actions.map((action, idx) => (
          <p key={idx}>
            <strong>{action.name}:</strong> <br />
            {action.desc}
          </p>
        ))}
      </div>
      {monsterHandler.spells && monsterHandler.spells.length > 0 && (
        <div
          className="card-body overflow-y-auto border-top"
          style={{ maxHeight: "25vh" }}
        >
          {monsterHandler.spells.map((spell) => (
            <Link
              key={spell.index}
              to={`/spells/${spell.index}`}
              className="list-group-item list-group-item-action border-secondary"
            >
              <strong>{spell.name}:</strong> <br />
              <strong>Level:</strong> {spell.level} <br />
              <br />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MonsterInfo;
