import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { BottomDelete } from "./bottom-delete";
import BtnModal from "./btn-modal";
import { Medicine } from "./types";
import { formatDate } from "../helpers/format-data.ts";
import BasicModal from "./modal.tsx";

interface PropsDropdown {
  medicine: Medicine;
}

export const Dropdown = (props: PropsDropdown) => {
  const { name, description, laboratory, status, amount, createdAt } = props.medicine;
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
            <BasicModal status={status} id={props.medicine._id} />
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
