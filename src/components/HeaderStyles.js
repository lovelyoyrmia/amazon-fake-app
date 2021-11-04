import styled from 'styled-components'

export const HeaderStyles = styled.div`
  display: flex;
  height: 60px;
  align-items: center;
  background-color: #131921;
  position: sticky;
  top: 0;
  z-index: 100;

  .header-logo {
    width: 100px;
    object-fit: contain;
    margin: 0 20px;
    margin-top: 18px;
  }

  .header-search {
    display: flex;
    flex: 1;
    align-items: center;
    border-radius: 24px;
  }

  .header-searchInput {
    height: 12px;
    padding: 10px;
    border: none;
    width: 100%;
  }

  .header-searchIcon {
    padding: 5px;
    height: 22px !important;
    background-color: #cd9042;
    border-radius: 2px;
  }

  .header-nav {
    display: flex;
    justify-content: space-evenly;
  }

  .header-option {
    display: flex;
    flex-direction: column;
    margin: 0 20px;
    color: white;
  }

  .header-optionLineOne {
    font-size: 12px;
  }

  .header-optionLineTwo {
    font-size: 15px;
    font-weight: 800;
  }

  .header-optionBasket {
    margin-top: 5px;
    display: flex;
    align-items: center;
    color: white;
  }

  .header-basketCount {
    margin: 0 20px;
  }

  .header-link {
    text-decoration: none;
  }
`
