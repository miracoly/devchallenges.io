import { useState } from "react";
import styled from "styled-components";
import Colors from "../../utils/Colors";
import FilterOverlay from "../FilterOverlay/FilterOverlay";

const FilterForm = styled.form`
  width: fit-content;
  height: 60px;
  box-shadow: 0px 1px 6px ${Colors.shadow.boxShadow};
  background: ${Colors.light.primary};
  border: none;
  border-radius: 16px;
  padding: 0;
`;

const FilterElement = styled.input.attrs((props) => ({
  placeholder: props.placeholder,
}))`
  padding: 0 18px;
  color: ${Colors.text.primary};
  min-height: 100%;
  font-family: "Mulish", sans-serif;
  font-size: 14px;
  font-weight: 400;
  vertical-align: middle;
  outline: none;
  background: none;
  border: none;
  border-left: ${(props) =>
    props.middle ? `1px solid ${Colors.light.secondary}` : "none"};
  border-right: ${(props) =>
    props.middle ? `1px solid ${Colors.light.secondary}` : "none"};
  &:hover {
    border: none;
    border-radius: 16px;
    background: ${Colors.light.secondary};
  }

  &:focus {
    border-left: ${(props) =>
      props.middle ? `1px solid ${Colors.light.secondary}` : "none"};
    border-right: ${(props) =>
      props.middle ? `1px solid ${Colors.light.secondary}` : "none"};
    border-radius: 0;
    background: none;
  }
`;

const FilterInput = styled(FilterElement).attrs((props) => ({
  type: "text",
}))`
  min-width: 200px;
`;

const FilterButton = styled(FilterElement).attrs((props) => ({
  type: "submit",
}))`
  min-width: 50px;
  font-size: 24px;
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  color: ${Colors.main.primary};
  cursor: pointer;
`;

const Filter = ({ submitFilterSearch, filteredStays }) => {
  const [isOverlayShown, setIsOverlayShown] = useState(false);
  const [locationSearch, setLocationSearch] = useState("");
  const [guestSearch, setGuestSearch] = useState("");

  const showOverlay = () => setIsOverlayShown(true);
  const hideOverlay = () => setIsOverlayShown(false);

  return (
    <>
      <FilterForm
        onSubmit={(e) => {
          submitFilterSearch(e);
          hideOverlay();
        }}
        onFocus={showOverlay}
        onChange={showOverlay}
      >
        <FilterInput
          onChange={(e) => setLocationSearch(e.target.value.toLowerCase())}
          placeholder="Location"
        />
        <FilterInput
          onChange={(e) => setGuestSearch(e.target.value.toLowerCase())}
          middle
          placeholder="Add Guests"
        />
        <FilterButton value="search" />
      </FilterForm>
      {isOverlayShown ? (
        <FilterOverlay
          {...{
            submitFilterSearch,
            setLocationSearch,
            hideOverlay,
            locationSearch,
            guestSearch,
          }}
        />
      ) : null}
    </>
  );
};

export default Filter;
