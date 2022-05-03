import { Selectselect, Arrow, SelectContainer, Optionoption } from "../styles/UtilsNavbar.styled";

export default function Select({ onChange, options, selected }) {
  return (
    <SelectContainer>
      <Arrow>▼</Arrow>

      <Selectselect onChange={onChange} value={selected}>
        {options.map((e) => (
          <Optionoption key={e.value} value={e.value}>
            {e.desc}
          </Optionoption>
        ))}
      </Selectselect>
    </SelectContainer>
  );
}
