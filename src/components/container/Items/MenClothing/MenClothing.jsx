import React, { useEffect } from "react";
import Catalogue from "../../../presentation/Catalogue/Catalogue";
import { getItems } from "../../../../store/actions/itemsActions";
import { MENCLOTH } from "../../../../service/enum/ProductTypes";
import { connect } from "react-redux";

function MenClothing(props) {
  useEffect(() => {
    if (!props.items.length) {
      props.getItems(MENCLOTH);
    }
  }, []);
  return <Catalogue title="Men's Clothing" items={props.items} />;
}

const mapStateToProps = (state) => ({
  items: state.items.itemsMen,
});
export default connect(mapStateToProps, { getItems })(MenClothing);
