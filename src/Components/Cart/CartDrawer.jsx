import React from "react";
import { XLg, Trash, Plus, Dash, Bag, Whatsapp, EnvelopeCheck } from "react-bootstrap-icons";
import { useCart } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartDrawer = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    cartTotal,
  } = useCart();

  const handleWhatsAppCheckout = () => {
    if (cart.length === 0) return;

    let message = `*New Tool Subscription Order from Nexa Studio Website*%0A%0A`;
    cart.forEach((item, index) => {
      message += `${index + 1}. *${item.name}*%0A   - Plan: ${item.tierName}%0A   - Price: ₹${item.price} / month%0A   - Qty: ${item.quantity}%0A%0A`;
    });
    message += `*Total Amount:* ₹${cartTotal} / month%0A%0A*Please share payment link / license key instructions.*`;

    // WhatsApp URL (Sonu's contact: +91 96103 42763)
    window.open(`https://wa.me/919610342763?text=${message}`, "_blank");
  };

  const handleEmailCheckout = () => {
    if (cart.length === 0) return;

    let subject = encodeURIComponent(`Subscription Inquiry: ${cart.map((i) => i.name).join(", ")}`);
    let body = `Hello Sonu,%0D%0A%0D%0AI would like to subscribe to the following tools from your store:%0D%0A%0D%0A`;
    cart.forEach((item, index) => {
      body += `${index + 1}. ${item.name} (${item.tierName}) x ${item.quantity} = ₹${item.price * item.quantity} / month%0D%0A`;
    });
    body += `%0D%0ATotal: ₹${cartTotal} / month%0D%0A%0D%0APlease send payment and license activation details.`;

    window.location.href = `mailto:sonu998999@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <div
        className={`cart__drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />

      <div className={`cart__drawer ${isCartOpen ? "open" : ""}`}>
        <div className="cart__header">
          <h3>
            <Bag className="fz-20" /> Your Cart <span className="count">{cartCount}</span>
          </h3>
          <button
            className="close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close Cart"
          >
            <XLg />
          </button>
        </div>

        <div className="cart__items-wrap">
          {cart.length === 0 ? (
            <div className="cart-empty">
              <Bag />
              <h4>Your cart is empty</h4>
              <p>Explore our autonomous AI tools and WordPress co-pilots.</p>
              <Link
                to="/tools"
                className="cmn--btn fw-500 d-inline-flex align-items-center gap-2"
                onClick={() => setIsCartOpen(false)}
              >
                Browse Tools
              </Link>
            </div>
          ) : (
            cart.map((item) => (
              <div key={item.cartItemId} className="cart__item">
                <div className="item-thumb">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="item-info">
                  <div className="item-name">{item.name}</div>
                  <div className="item-tier">{item.tierName}</div>
                  <div className="item-bottom">
                    <div className="item-price">₹{item.price * item.quantity} / mo</div>
                    <div className="qty-controls">
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity - 1)}
                        aria-label="Decrease quantity"
                      >
                        <Dash />
                      </button>
                      <span>{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.cartItemId, item.quantity + 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="item-remove"
                  onClick={() => removeFromCart(item.cartItemId)}
                  title="Remove item"
                  aria-label="Remove item"
                >
                  <Trash />
                </button>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart__footer">
            <div className="cart__summary">
              <span className="total-label">Subtotal:</span>
              <span className="total-amount">
                ₹{cartTotal}
                <span style={{ fontSize: "14px", fontWeight: "normal", color: "var(--pra)", marginLeft: "4px" }}>
                  / month
                </span>
              </span>
            </div>

            <div className="checkout-btns">
              <button
                className="btn-whatsapp-order"
                onClick={handleWhatsAppCheckout}
              >
                <Whatsapp className="fz-18" /> Order & Instant License via WhatsApp
              </button>
              <button
                className="btn-email-order"
                onClick={handleEmailCheckout}
              >
                <EnvelopeCheck className="fz-18" /> Checkout via Email / Invoice
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
