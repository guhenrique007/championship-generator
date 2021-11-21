import { AddButton } from './AddButton.style';
import { InputField } from './InputField.style';
import { Container } from './Container.style';

export function InsertRow () {
  return (
    <Container>
      <InputField></InputField>
      <AddButton>+</AddButton>
    </Container>
  );
}