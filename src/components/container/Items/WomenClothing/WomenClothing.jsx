import React, { useEffect } from "react";
import Catalogue from "../../../presentation/Catalogue/Catalogue";
import { getItems } from "../../../../store/actions/itemsActions";
import { WOMANCLOTH } from "../../../../service/enum/ProductTypes";
import { connect } from "react-redux";

function WomenClothing(props) {
  useEffect(() => {
    props.getItems(WOMANCLOTH);
  }, []);
  return <Catalogue title="Women's Clothing" items={props.items} />;
}

const mapStateToProps = (state) => ({
  items: state.items.items,
});
export default connect(mapStateToProps, { getItems })(WomenClothing);
