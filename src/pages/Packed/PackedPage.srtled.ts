import styled from 'styled-components';

const PackedRulesWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 553px;
  margin: 71px 0 100px;

  img {
    width: 148px;
    height: 144px;
  }
`;

const RulesList = styled.ol`
  list-style: decimal;
  max-width: 336px;
  height: 88px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const PackedPageNavButtons = styled.nav`
  width: 100%;
  max-width: 538px;
  display: flex;
  justify-content: space-between;
`;

export { PackedRulesWrapper, RulesList, PackedPageNavButtons };
