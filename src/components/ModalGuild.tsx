/* eslint-disable @next/next/no-img-element */
import { StyledModalIMG } from "../styles/modalIMG";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import { useContext } from "react";
import { UserContext } from "../contexts";

export default function ModalGuild(props: any) {
  const { modalGuild, setModalGuild } = useContext(UserContext);

  return (
    <StyledModalIMG>
      <div>
        <button onClick={() => setModalGuild(false)}>
          <DisabledByDefaultIcon color="primary" fontSize="large" />
        </button>
        <img src={props.imgModal} alt={props.altModal} />
      </div>
    </StyledModalIMG>
  );
}
