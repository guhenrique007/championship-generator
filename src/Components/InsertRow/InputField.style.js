import styled from "styled-components";
import React from 'react';
import { useTeam } from "../../context/Team";

const StyledInput = styled.input`
`

export function InputField () {
  const {team, setTeam} = useTeam();

  return (
    <StyledInput 
      value={team}
      onChange={e => {
          setTeam(e.target.value)
        }
      }
    />
  )
}
