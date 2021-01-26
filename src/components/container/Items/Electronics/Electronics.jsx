import React, { useEffect } from "react";
import Catalogue from "../../../presentation/Catalogue/Catalogue";
import { getItems } from "../../../../store/actions/itemsActions";
import { ELECTRONICS } from "../../../../service/enum/ProductTypes";
import { connect } from "react-redux";

function Electronics(props) {
  useEffect(() => {
    if (!props.items.length) {
      props.getItems(ELECTRONICS);
    }
  }, []);
  return <Catalogue title="Electronics" items={props.items} />;
}

const mapStateToProps = (state) => ({
  items: state.items.itemsElectronics,
});
export default connect(mapStateToProps, { getItems })(Electronics);
