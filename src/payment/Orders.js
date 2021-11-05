import React, { useEffect, useState } from "react";
import { useStateValue } from "../components/StateProvider";
import { db } from "../firebase/firebase";
import Order from "./Order";
import { OrderStyles } from "./OrdersStyles";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [{ basket, user }, _] = useStateValue();

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
    document.title = "Your Orders";
  }, []);
  return (
    <OrderStyles>
      <h1>Your orders</h1>
      <div className="orders-order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </OrderStyles>
  );
}

export default Orders;
