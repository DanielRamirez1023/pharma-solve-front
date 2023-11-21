import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BottomDelete } from "./bottom-delete";
import BtnModal from "./modal";
import { Medicine } from "./types";
import { formatDate } from "../helpers/format-data.ts";

interface PropsDropdown {
  medicine: Medicine;
}

export const Dropdown = (props: PropsDropdown) => {
  const { name, description, laboratory, completed, amount, createdAt } = props.medicine;
  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
        <div className="flex justify-between items-center w-full px-3">
          <article className="flex flex-col">
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm">{description}</p>
          </article>
          <h3 className="font-semibold text-xl">{amount}</h3>
        </div>
      </AccordionSummary>
      <AccordionDetails>
        <aside className="flex justify-between items-center px-3">
          <div className="flex flex-col  text-sm gap-1">
            <p>
              <span className="font-semibold">Laboratorio: </span>
              {laboratory}
            </p>
            <p>
              <span className="font-semibold">Fecha: </span>
              {formatDate(Number(createdAt))}
            </p>
            <p className="flex items-center gap-2">
              {completed && <span className="bg-green-500 rounded-lg px-2 py-1 text-white">Completado</span>}
              {!completed && <span className="bg-red-500 rounded-lg px-3 py-1 text-white">Pendiente</span>}
            </p>
          </div>
          <div className="flex">
            <BottomDelete id={props.medicine._id} />
            <BtnModal title="Editar" type="Icon" item={props.medicine} />
          </div>
        </aside>
      </AccordionDetails>
    </Accordion>
  );
};
