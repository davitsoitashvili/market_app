import React, { useEffect } from "react";
import Catalogue from "../../../presentation/Catalogue/Catalogue";
import { getItems } from "../../../../store/actions/itemsActions";
import { JEWELERY } from "../../../../service/enum/ProductTypes";
import { connect } from "react-redux";

function Jewelery(props) {
  useEffect(() => {
    if (!props.items.length) {
      props.getItems(JEWELERY);
    }
  }, []);
  return <Catalogue title="Jewelery" items={props.items} />;
}

const mapStateToProps = (state) => ({
  items: state.items.itemsJewelery,
});
export default connect(mapStateToProps, { getItems })(Jewelery);
