import { SafeAreaView, Image, View, TextInput, Text } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import AddNote from "../../components/ShoppingCart/AddNote";
import TouchableAddNote from "../../components/ShoppingCart/TouchableAddNote";
import FootherBtns from "../../components/ShoppingCart/FootherBtns";
import ShopingItems from "../../components/ShoppingCart/ShopingItems";
let chimekYoonIcon = require("../../../assets/FoodMenu/ChimekYoonIcon.png");
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartEmpty from "../../components/ShoppingCart/CartEmpty";
let textInputPlaceHolderColor = "#FFFFFF";
let textInputDefaultValue = "Añadir una nota";
let textAddBtn = "Añadir mas";
let textConfirmBtn = "Confirmar";
const ShoppingCart = () => {
  const [touchAddNote, setTouchAddNote] = useState(false);
  /* si queremos ver lo que estamos escribiendo en la nota */
  const [note, setNote] = useState(null);
  /* Estado del total del pedido  */
  //const [total, setTotal] = useState(null);
  const [confirmation, setConfirmation] = useState(false);
  const [confirmationOrder, setConfirmationOrder] = useState(false)
  const onPressAddNote = () => {
    setTouchAddNote(!touchAddNote);
  };

  const {total,carrito} = useContext(CartContext)

  const onPressCancel = () => {
    setTouchAddNote(false);
  };

  const onPressSuccess = () => {
   setConfirmationOrder(true);
  };

  const onPressConfirmation = () => {
    setConfirmation(true);
  };

  return (
    !carrito.length?<CartEmpty/>:
    <SafeAreaView style={styles.container}>
      <>
        <View style={styles.containerLogo}>
          <Image style={styles.logo} source={chimekYoonIcon} />
        </View>
        {/* <ScrollMenu active={true} /> */}
        <ShopingItems/> 
      </>

      <View style={styles.containerFootherShoppingCart}>
        {touchAddNote ? (
          <AddNote
            styleTextInput={styles.textInput}
            placeholder={textInputDefaultValue}
            placeholderTextColor={textInputPlaceHolderColor}
            styleContainerAddNote={styles.containerAddNote}
            styleBtnSection={styles.btnSection}
            styleSuccessBtn={styles.successBtn}
            styleCancelBtn={styles.cancelBtn}
            styleTextBtn={styles.textBtns}
           
            onPressCancel={onPressCancel}
          />
        ) : (
          <TouchableAddNote
            onPress={onPressAddNote}
            text={textInputDefaultValue}
            styleBtn={styles.addNoteBtn}
            styleTextBtn={styles.textBtn}
          />
        )}
      </View>
      <View style={styles.containerTotalOrder}>
        <Text style={styles.totalOrder}>Total del pedido :</Text>
        <Text style={styles.totalValueOrder}>$ {total()}</Text>
      </View>
      <FootherBtns
        styleContainerFootherBtns={styles.footherBtns}
        styleAddBtn={styles.addBtn}
        styleTextAddBtn={styles.textAddBtn}
        styleConfirmBtn={styles.confirmBtn}
        styleTextConfirmBtn={styles.textConfirmBtn}
        textAddBtn={textAddBtn}
        textConfirmBtn={textConfirmBtn}
        confirmation={confirmation}
        confirmationOrder={confirmationOrder}
        setConfirmationOrder={setConfirmationOrder}
        onPressSuccess={onPressSuccess}
        onPressConfirmation={onPressConfirmation}
        setConfirmation={setConfirmation}
      />
    </SafeAreaView>
  );
};

export default ShoppingCart;
