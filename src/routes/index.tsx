import { createFileRoute } from "@tanstack/react-router";
import {
  Instagram,
  Facebook,
  Music2,
  MapPin,
  Clock3,
  Phone,
  MessageCircle,
  Plus,
  Minus,
  ShoppingBag,
  Flame,
  Trash2,
  X,
} from "lucide-react";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";

import heroBurger from "../assets/spicy-foods-burger-hero.jpg";
import pizzaImage from "../assets/spicy-foods-pizza.jpg";
import burgerImage from "../assets/spicy-foods-burger-card.jpg";
import sidesImage from "../assets/spicy-foods-sides.jpg";

import loadedSpicyPizzaImg from "../assets/loaded-special-pizza.jpg";
import creamyTikkaPizzaImg from "../assets/Creamy Tikka Pizza.jpg";
import bbqFajitaPizzaImg from "../assets/BBQ Fajita Pizza.jpg";
import pepperoniPizzaImg from "../assets/Pepperoni Flame Pizza.jpg";

import zingerImg from "../assets/spicy-foods-burger-card.jpg";
import mightyZingerImg from "../assets/spicy-foods-burger-card.jpg";
import doubleCheeseBeefImg from "../assets/spicy-foods-burger-card.jpg";
import chickenJalapenoImg from "../assets/spicy-foods-burger-card.jpg";
import smashLavaBurgerImg from "../assets/spicy-foods-burger-hero.jpg";

import lavaRollImg from "../assets/Mayo Garlic Roll.jpg";
import mayoGarlicRollImg from "../assets/Mayo Garlic Roll.jpg";
import chatniRollImg from "../assets/Chicken Chatni Roll.webp";
import cheeseRollImg from "../assets/Cheese Paratha Roll.jpg";

import broastImg from "../assets/Crispy Broast Quarter.jpg";
import wingsImg from "../assets/special-wings-6.jpg";
import nuggetsImg from "../assets/Nuggets 9 pcs.jpg";
import stripsImg from "../assets/fire-chicken-strips.png";

import plainFriesImg from "../assets/plain-fries.avif";
import masalaFriesImg from "../assets/masala-fries.jpeg";
import loadedPizzaFriesImg from "../assets/Popular-loaded-pizza-fries.png";
import cheesyGarlicFriesImg from "../assets/Cheesy Garlic Fries.png";

import clubSandwichImg from "../assets/spicy-foods-burger-card.jpg";
import tortillaWrapImg from "../assets/Crispy Tortilla Wrap.jpg";
import coldDrinkImg from "../assets/cold-drink.webp";

import extraCheeseImg from "../assets/Extra Cheese Slice.jpg";
import sauceCupImg from "../assets/Signature Sauce Cup.jpg";
import extraJalapenosImg from "../assets/spicy-foods-burger-card.jpg";

import coupleDealImg from "../assets/spicy-foods-burger-hero.jpg";
import familyFeastImg from "../assets/family-feast.webp";
import partyBoxImg from "../assets/spicy-foods-sides.jpg";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/")({
  head: () => ({
    links: [{ rel: "preload", as: "image", href: heroBurger, fetchPriority: "high" }],
  }),
  component: Index,
});

const WHATSAPP_NUMBER = "923158454839";
const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/anusharehman64?igsh=eWIwejlsd3BzOGQ1", Icon: Instagram },
  { label: "Facebook", href: "https://www.facebook.com/share/1Gjb9yRyTA/", Icon: Facebook },
  { label: "TikTok", href: "https://www.tiktok.com/@agenticaideveloper", Icon: Music2 },
];

const categories = ["Pizza", "Burgers", "Rolls", "Crispy", "Fries", "Other", "Extras", "Deals"];

type MenuItem = {
  id: string;
  name: string;
  price: number;
  priceLabel?: string;
  image: string;
  tag?: string;
  tags: string[];
  description: string;
};

type MenuSection = {
  title: string;
  note?: string;
  intro?: string;
  items: MenuItem[];
};

type CartItem = MenuItem & { quantity: number };

const menuSections: MenuSection[] = [
  {
    title: "Pizza",
    note: "3 sizes · 8 flavours",
    intro: "Flavours: Tikka · BBQ · Fajita · Malai Boti · Creamy Tikka · Supreme · Pepperoni · Spicy Ranch",
    items: [
      { id: "pizza-large", name: "Loaded Spicy Pizza", price: 850, priceLabel: "RS 850", image: loadedSpicyPizzaImg, tag: "Hot", tags: ["Cheesy", "Spicy", "Fresh Dough"], description: "A full loaded pizza with molten cheese, spicy sauce, grilled chicken and crisp vegetables." },
      { id: "pizza-medium", name: "Creamy Tikka Pizza", price: 550, priceLabel: "RS 550", image: creamyTikkaPizzaImg, tags: ["Creamy", "Tikka", "Medium"], description: "Creamy tikka topping with signature sauce, mozzarella and smoky chicken chunks." },
      { id: "pizza-small", name: "BBQ Fajita Pizza", price: 350, priceLabel: "RS 350", image: bbqFajitaPizzaImg, tags: ["BBQ", "Fajita", "Small"], description: "Compact, saucy and smoky pizza made for quick cravings." },
      { id: "pizza-pepperoni", name: "Pepperoni Flame Pizza", price: 650, priceLabel: "RS 650", image: pepperoniPizzaImg, tag: "New", tags: ["Pepperoni", "Extra Cheese", "Crispy Edge"], description: "Pepperoni slices, golden crust and a chilli-garlic finish." },
    ],
  },
  {
    title: "Burgers",
    items: [
      { id: "zinger", name: "Spicy Zinger", price: 320, priceLabel: "RS 320", image: zingerImg, tag: "Popular", tags: ["Crispy", "Chicken", "Spicy Mayo"], description: "Crispy chicken fillet with spicy mayo, lettuce and soft toasted bun." },
      { id: "mighty-zinger", name: "Mighty Zinger", price: 430, priceLabel: "RS 430", image: mightyZingerImg, tags: ["Double Crunch", "Cheese", "Big Bite"], description: "A heavier zinger build with extra crunch, cheese and signature sauce." },
      { id: "double-beef", name: "Double Cheese Beef", price: 560, priceLabel: "RS 560", image: doubleCheeseBeefImg, tag: "Signature", tags: ["Beef", "Double Cheese", "Premium"], description: "Juicy double beef patties with caramelized onions, cheese and house sauce." },
      { id: "jalapeno", name: "Chicken Jalapeño", price: 380, priceLabel: "RS 380", image: chickenJalapenoImg, tags: ["Jalapeño", "Chicken", "Tangy"], description: "Grilled chicken, jalapeños and creamy sauce for a sharp spicy hit." },
      { id: "smash", name: "Smash Lava Burger", price: 620, priceLabel: "RS 620", image: smashLavaBurgerImg, tag: "Chef Pick", tags: ["Smash", "Lava Sauce", "Loaded"], description: "A smashed patty burger finished with hot lava sauce and melted cheese." },
    ],
  },
  {
    title: "Rolls",
    items: [
      { id: "lava-roll", name: "Legendary Lava Roll", price: 720, priceLabel: "RS 720", image: lavaRollImg, tag: "Signature", tags: ["Loaded", "Paratha", "Saucy"], description: "A loaded paratha roll packed with chicken, cheese and lava sauce." },
      { id: "mayo-roll", name: "Mayo Garlic Roll", price: 260, priceLabel: "RS 260", image: mayoGarlicRollImg, tags: ["Garlic", "Chicken", "Creamy"], description: "Tender chicken wrapped with creamy mayo garlic sauce." },
      { id: "chatni-roll", name: "Chicken Chatni Roll", price: 230, priceLabel: "RS 230", image: chatniRollImg, tags: ["Chatni", "Classic", "Fresh"], description: "Classic chicken roll with fresh chatni and onions." },
      { id: "cheese-roll", name: "Cheese Paratha Roll", price: 340, priceLabel: "RS 340", image: cheeseRollImg, tags: ["Cheese", "Paratha", "Melty"], description: "Warm paratha roll with melted cheese and chicken filling." },
    ],
  },
  {
    title: "Crispy",
    items: [
      { id: "broast", name: "Crispy Broast Quarter", price: 390, priceLabel: "RS 390", image: broastImg, tags: ["Broast", "Crunchy", "Fresh"], description: "Golden crispy broast served hot with dip and fresh crunch." },
      { id: "wings", name: "Hot Wings 6 pcs", price: 420, priceLabel: "RS 420", image: wingsImg, tag: "Spicy", tags: ["6 Pieces", "Hot", "Saucy"], description: "Six spicy wings tossed with a bold chilli glaze." },
      { id: "nuggets", name: "Nuggets 9 pcs", price: 360, priceLabel: "RS 360", image: nuggetsImg, tags: ["9 Pieces", "Kids", "Crispy"], description: "Crispy bite-sized nuggets with a golden coating." },
      { id: "strips", name: "Fire Chicken Strips", price: 480, priceLabel: "RS 480", image: stripsImg, tags: ["Strips", "Dip", "Crispy"], description: "Boneless chicken strips with spicy dip and crunchy coating." },
    ],
  },
  {
    title: "Fries",
    items: [
      { id: "plain-fries", name: "Plain Fries", price: 180, priceLabel: "RS 180", image: plainFriesImg, tags: ["Classic", "Crispy", "Salted"], description: "Crispy golden fries, lightly salted and served fresh." },
      { id: "masala-fries", name: "Masala Fries", price: 230, priceLabel: "RS 230", image: masalaFriesImg, tags: ["Masala", "Spicy", "Crispy"], description: "Golden fries tossed in spicy masala seasoning." },
      { id: "pizza-fries", name: "Loaded Pizza Fries", price: 520, priceLabel: "RS 520", image: loadedPizzaFriesImg, tag: "Popular", tags: ["Loaded", "Cheese", "Saucy"], description: "Fries layered with pizza sauce, chicken, cheese and herbs." },
      { id: "garlic-fries", name: "Cheesy Garlic Fries", price: 460, priceLabel: "RS 460", image: cheesyGarlicFriesImg, tags: ["Garlic", "Cheese", "Creamy"], description: "Fries coated with creamy garlic sauce and melted cheese." },
    ],
  },
  {
    title: "Other",
    items: [
      { id: "club", name: "Spicy Club Sandwich", price: 540, priceLabel: "RS 540", image: clubSandwichImg, tags: ["Triple Layer", "Chicken", "Fresh"], description: "Triple-layer sandwich with chicken, egg, vegetables and house sauce." },
      { id: "wrap", name: "Crispy Tortilla Wrap", price: 410, priceLabel: "RS 410", image: tortillaWrapImg, tags: ["Wrap", "Crispy", "Saucy"], description: "Soft tortilla wrapped around crispy chicken and spicy sauce." },
      { id: "drink", name: "Cold Drink", price: 120, priceLabel: "RS 120", image: coldDrinkImg, tags: ["Chilled", "Add-on", "Refreshing"], description: "Chilled drink to complete your meal." },
    ],
  },
  {
    title: "Extras",
    items: [
      { id: "extra-cheese", name: "Extra Cheese Slice", price: 80, priceLabel: "RS 80", image: extraCheeseImg, tags: ["Cheese", "Add-on", "Melty"], description: "Add extra cheese to any burger, roll or pizza." },
      { id: "extra-sauce", name: "Signature Sauce Cup", price: 70, priceLabel: "RS 70", image: sauceCupImg, tags: ["Sauce", "Dip", "Spicy"], description: "House-made spicy sauce for fries, burgers and crispy items." },
      { id: "jalapenos-extra", name: "Extra Jalapeños", price: 60, priceLabel: "RS 60", image: extraJalapenosImg, tags: ["Jalapeño", "Add-on", "Hot"], description: "Extra jalapeños for a sharper spicy kick." },
    ],
  },
  {
    title: "Deals",
    items: [
      { id: "couple", name: "Couple Deal", price: 799, priceLabel: "RS 799", image: coupleDealImg, tags: ["2 Persons", "Value", "Burger"], description: "A value combo for two with burgers, fries and drinks." },
      { id: "family", name: "Family Feast", price: 1499, priceLabel: "RS 1499", image: familyFeastImg, tag: "Save Big", tags: ["Family", "Pizza", "Best Value"], description: "Family-sized feast with pizza, crispy sides and drinks." },
      { id: "party", name: "Party Box", price: 2299, priceLabel: "RS 2299", image: partyBoxImg, tags: ["Party", "Loaded", "Shareable"], description: "A large share box with burgers, rolls, fries and crispy bites." },
    ],
  },
];

const allItems = menuSections.flatMap((section) => section.items);

function showAlert(title: string, text: string, icon: "success" | "info" | "warning" = "success") {
  void Swal.fire({
    title,
    text,
    icon,
    background: "#17130f",
    color: "#f5ead2",
    confirmButtonColor: "#d69b3d",
    timer: icon === "success" ? 1250 : undefined,
    showConfirmButton: icon !== "success",
  });
}

function Index() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [detailQuantity, setDetailQuantity] = useState(1);

  const cartTotal = useMemo(() => cart.reduce((total, item) => total + item.price * item.quantity, 0), [cart]);
  const cartCount = useMemo(() => cart.reduce((total, item) => total + item.quantity, 0), [cart]);

  const addToCart = (item: MenuItem, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((cartItem) => cartItem.id === item.id);
      if (existing) {
        return current.map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + quantity } : cartItem,
        );
      }
      return [...current, { ...item, quantity }];
    });
    showAlert("Added to cart", `${quantity} × ${item.name} added successfully.`);
  };

  const removeOne = (item: MenuItem) => {
    setCart((current) =>
      current
        .map((cartItem) =>
          cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem,
        )
        .filter((cartItem) => cartItem.quantity > 0),
    );
    showAlert("Cart updated", `${item.name} quantity updated.`, "info");
  };

  const clearItem = (item: MenuItem) => {
    setCart((current) => current.filter((cartItem) => cartItem.id !== item.id));
    showAlert("Removed", `${item.name} removed from cart.`, "info");
  };

  const openDetail = (item: MenuItem) => {
    setSelectedItem(item);
    setDetailQuantity(1);
  };

  const placeOrder = () => {
    if (!cart.length) {
      showAlert("Cart is empty", "Please add your favourite Spicy Foods items first.", "warning");
      return;
    }

    const itemsText = cart
      .map((item, index) => `${index + 1}. ${item.name} x${item.quantity} = RS ${item.price * item.quantity}`)
      .join("%0A");
    const message = `Assalam o Alaikum Spicy Foods,%0AI want to place this order:%0A%0A${itemsText}%0A%0ATotal: RS ${cartTotal}%0A%0AName:%0AAddress:%0ANotes:`;
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;
    showAlert("Opening WhatsApp", "Your full order details are ready to send.");
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="relative min-h-[360px] overflow-hidden border-b border-warm-line md:min-h-[520px]">
        <img
          src={heroBurger}
          alt="Spicy Foods premium burger feast banner"
          width={1600}
          height={900}
          className="absolute inset-0 h-full w-full object-cover object-center"
          decoding="async"
          fetchPriority="high"
          loading="eager"
          sizes="100vw"
        />
        <div className="hero-food-shadow absolute inset-0" />
        <div className="grain-overlay absolute inset-0 opacity-45" />

        <nav className="relative z-10 flex items-center justify-between p-4 md:p-6">
          <button
            type="button"
            onClick={() => showAlert("Spicy Foods", "Fresh burgers, pizzas, rolls and crispy deals are ready.", "info")}
            className="flex items-center gap-3 rounded-lg border border-warm-line bg-surface/90 px-3 py-2 backdrop-blur-sm transition hover:border-primary"
          >
            <span className="grid h-7 w-7 place-items-center rounded-full border border-brand text-brand"><Flame className="h-4 w-4" /></span>
            <span className="font-display text-xl tracking-[0.16em] text-primary">Spicy Foods</span>
          </button>
          <div className="flex gap-2 text-muted-foreground">
            {socialLinks.map(({ Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-9 w-9 place-items-center rounded-lg border border-warm-line bg-surface/80 transition hover:border-primary hover:text-primary">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </nav>

        <section className="relative z-10 flex min-h-[255px] flex-col justify-end px-4 pb-8 md:min-h-[390px] md:px-8 md:pb-12">
          <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-brand/50 bg-primary/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-primary">
            <span className="h-2 w-2 rounded-full bg-chart-3" /> Open Now — 3PM to 3AM
          </div>
          <h1 className="max-w-4xl font-display text-6xl leading-none text-foreground md:text-8xl">Spicy Feast <em className="not-italic text-primary">Banner</em></h1>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground md:text-lg">Premium burgers, cheesy pizzas, crispy broast, lava rolls and family deals — order directly on WhatsApp.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild variant="spice" size="xl"><a href="#menu"><ShoppingBag /> Explore Menu</a></Button>
            <Button variant="charcoal" size="xl" onClick={placeOrder}><MessageCircle /> Place Order</Button>
          </div>
        </section>
      </header>

      <section className="sticky top-0 z-30 border-b border-warm-line bg-surface/95 backdrop-blur-xl">
        <div className="flex overflow-x-auto scrollbar-none border-b border-warm-line text-sm text-muted-foreground">
          {[
            [MapPin, "Liaquatabad B1, Karachi"],
            [Clock3, "3 PM — 3 AM"],
            [Phone, "0315 845 4839"],
            [MessageCircle, "WhatsApp Order"],
          ].map(([Icon, label]) => {
            const TypedIcon = Icon as typeof MapPin;
            return (
              <button key={String(label)} type="button" onClick={String(label).includes("WhatsApp") ? placeOrder : () => showAlert(String(label), "Spicy Foods information copied for your order.", "info")} className="flex min-w-fit items-center gap-2 border-r border-warm-line px-4 py-3 transition hover:text-primary">
                <TypedIcon className="h-4 w-4 text-primary" /> {String(label)}
              </button>
            );
          })}
        </div>
        <div className="flex items-center justify-between gap-4 px-4">
          <div className="flex overflow-x-auto scrollbar-none">
            {categories.map((category) => (
              <a key={category} href={`#${category.toLowerCase()}`} className="border-b-2 border-transparent px-4 py-4 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground transition hover:border-primary hover:text-primary first:border-primary first:text-primary">
                {category}
              </a>
            ))}
          </div>
          <Button variant="charcoal" size="sm" className="hidden shrink-0 md:inline-flex" onClick={placeOrder}><ShoppingBag /> Cart {cartCount}</Button>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1540px] gap-6 px-4 py-8 md:px-6 xl:grid-cols-[1fr_390px]">
        <div id="menu">
          {menuSections.map((section, sectionIndex) => (
            <section key={section.title} id={section.title.toLowerCase()} className="mb-10 scroll-mt-32 menu-reveal" style={{ animationDelay: `${sectionIndex * 70}ms` }}>
              <div className="mb-5 flex items-end gap-3">
                <span className="h-px w-7 bg-primary" />
                <h2 className="font-display text-3xl tracking-[0.14em] text-primary">{section.title}</h2>
                {section.note && <p className="pb-1 text-xs text-muted-foreground">{section.note}</p>}
              </div>
              {section.intro && (
                <p className="mb-4 rounded-lg border border-warm-line bg-secondary px-4 py-3 text-sm text-muted-foreground">
                  🍕 <strong className="text-primary">{section.intro.split(":")[0]}:</strong>{section.intro.substring(section.intro.indexOf(":") + 1)}
                </p>
              )}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => <MenuCard key={item.id} item={item} onOpen={openDetail} onAdd={addToCart} onRemove={removeOne} />)}
              </div>
            </section>
          ))}
        </div>

        <CartPanel cart={cart} total={cartTotal} count={cartCount} onAdd={addToCart} onRemove={removeOne} onClear={clearItem} onCheckout={placeOrder} />
      </div>

      <div className="fixed inset-x-3 bottom-3 z-40 xl:hidden">
        <Button variant="spice" size="xl" className="w-full justify-between shadow-hero" onClick={placeOrder}>
          <span className="flex items-center gap-2"><MessageCircle /> Place Order on WhatsApp</span>
          <span>RS {cartTotal}</span>
        </Button>
      </div>

      <Dialog open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        {selectedItem && (
          <DialogContent className="max-h-[92vh] overflow-y-auto border-warm-line bg-popover p-0 text-popover-foreground sm:max-w-3xl">
            <div className="grid md:grid-cols-[1fr_1.05fr]">
              <div className="relative min-h-[260px] overflow-hidden bg-muted md:min-h-full">
                <img src={selectedItem.image} alt={selectedItem.name} width={1200} height={900} loading="eager" decoding="async" sizes="(min-width: 768px) 45vw, 100vw" className="h-full w-full object-cover" />
                {selectedItem.tag && <span className="absolute left-4 top-4 rounded-full bg-accent px-3 py-1 text-xs font-black uppercase tracking-[0.16em] text-accent-foreground">{selectedItem.tag}</span>}
              </div>
              <div className="p-5 md:p-7">
                <DialogHeader>
                  <DialogTitle className="font-display text-4xl tracking-[0.08em] text-primary">{selectedItem.name}</DialogTitle>
                  <DialogDescription className="text-base leading-7 text-muted-foreground">{selectedItem.description}</DialogDescription>
                </DialogHeader>
                <div className="mt-4 flex flex-wrap gap-2">
                  {selectedItem.tags.map((tag) => <span key={tag} className="rounded-full border border-warm-line bg-secondary px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] text-secondary-foreground">{tag}</span>)}
                </div>
                <div className="mt-6 flex items-center justify-between rounded-lg border border-warm-line bg-card p-4">
                  <span className="text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">Quantity</span>
                  <div className="flex items-center gap-3">
                    <button type="button" aria-label="Decrease quantity" onClick={() => setDetailQuantity((value) => Math.max(1, value - 1))} className="grid h-10 w-10 place-items-center rounded-lg border border-warm-line text-muted-foreground transition hover:border-primary hover:text-primary"><Minus className="h-4 w-4" /></button>
                    <span className="w-8 text-center font-display text-3xl text-primary">{detailQuantity}</span>
                    <button type="button" aria-label="Increase quantity" onClick={() => setDetailQuantity((value) => value + 1)} className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground transition hover:scale-105"><Plus className="h-4 w-4" /></button>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.16em] text-muted-foreground">Total</p>
                    <p className="font-display text-4xl tracking-[0.08em] text-primary">RS {selectedItem.price * detailQuantity}</p>
                  </div>
                  <Button variant="spice" size="xl" onClick={() => { addToCart(selectedItem, detailQuantity); setSelectedItem(null); }}><ShoppingBag /> Add</Button>
                </div>
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </main>
  );
}

function MenuCard({ item, onOpen, onAdd, onRemove }: { item: MenuItem; onOpen: (item: MenuItem) => void; onAdd: (item: MenuItem) => void; onRemove: (item: MenuItem) => void }) {
  return (
    <article onClick={() => onOpen(item)} className="group relative cursor-pointer overflow-hidden rounded-xl border border-warm-line bg-card menu-card-shadow transition duration-300 hover:-translate-y-1 hover:border-primary/70">
      {item.tag && <span className="absolute left-3 top-3 z-10 rounded-full bg-accent px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-accent-foreground">{item.tag}</span>}
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img src={item.image} alt={item.name} width={1200} height={900} loading="lazy" decoding="async" sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 31vw, (min-width: 640px) 48vw, 100vw" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <div className="flex min-h-28 items-end justify-between gap-4 p-4">
        <div>
          <h3 className="font-bold text-card-foreground">{item.name}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-muted-foreground">{item.description}</p>
          <p className="mt-2 font-display text-2xl tracking-[0.08em] text-primary">{item.priceLabel ?? `RS ${item.price}`}</p>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" aria-label={`Remove ${item.name}`} onClick={(event) => { event.stopPropagation(); onRemove(item); }} className="grid h-9 w-9 place-items-center rounded-lg border border-warm-line text-muted-foreground transition hover:border-primary hover:text-primary"><Minus className="h-4 w-4" /></button>
          <button type="button" aria-label={`Add ${item.name}`} onClick={(event) => { event.stopPropagation(); onAdd(item); }} className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground transition hover:scale-105"><Plus className="h-4 w-4" /></button>
        </div>
      </div>
    </article>
  );
}

function CartPanel({ cart, total, count, onAdd, onRemove, onClear, onCheckout }: { cart: CartItem[]; total: number; count: number; onAdd: (item: MenuItem) => void; onRemove: (item: MenuItem) => void; onClear: (item: MenuItem) => void; onCheckout: () => void }) {
  return (
    <aside className="hidden xl:block">
      <div className="sticky top-32 overflow-hidden rounded-xl border border-warm-line bg-surface menu-card-shadow">
        <div className="border-b border-warm-line p-5">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-3xl tracking-[0.12em] text-primary">Your Cart</h2>
            <span className="rounded-full bg-secondary px-3 py-1 text-xs font-bold text-secondary-foreground">{count} items</span>
          </div>
          <p className="mt-1 text-sm text-muted-foreground">Product images match every cart item.</p>
        </div>
        <div className="max-h-[430px] space-y-3 overflow-y-auto p-4 scrollbar-none">
          {cart.length ? cart.map((item) => (
            <div key={item.id} className="grid grid-cols-[74px_1fr_auto] gap-3 rounded-lg border border-warm-line bg-card p-2">
              <img src={item.image} alt={item.name} width={148} height={148} loading="lazy" decoding="async" sizes="74px" className="h-[74px] w-[74px] rounded-md object-cover" />
              <div className="min-w-0">
                <p className="truncate font-bold text-card-foreground">{item.name}</p>
                <p className="text-xs text-muted-foreground">RS {item.price} × {item.quantity}</p>
                <p className="font-display text-2xl text-primary">RS {item.price * item.quantity}</p>
              </div>
              <div className="flex flex-col gap-1">
                <button type="button" aria-label={`Add ${item.name}`} onClick={() => onAdd(item)} className="grid h-7 w-7 place-items-center rounded-md bg-primary text-primary-foreground"><Plus className="h-3.5 w-3.5" /></button>
                <button type="button" aria-label={`Remove ${item.name}`} onClick={() => onRemove(item)} className="grid h-7 w-7 place-items-center rounded-md border border-warm-line text-muted-foreground"><Minus className="h-3.5 w-3.5" /></button>
                <button type="button" aria-label={`Clear ${item.name}`} onClick={() => onClear(item)} className="grid h-7 w-7 place-items-center rounded-md border border-warm-line text-muted-foreground"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          )) : (
            <div className="rounded-lg border border-dashed border-warm-line p-6 text-center text-sm text-muted-foreground">
              <ShoppingBag className="mx-auto mb-3 h-8 w-8 text-primary" />
              Click any product to view details or add items to cart.
            </div>
          )}
        </div>
        <div className="border-t border-warm-line p-5">
          <div className="mb-4 flex items-end justify-between">
            <span className="text-sm font-bold uppercase tracking-[0.16em] text-muted-foreground">Total</span>
            <span className="font-display text-4xl tracking-[0.08em] text-primary">RS {total}</span>
          </div>
          <Button variant="spice" size="xl" className="w-full" onClick={onCheckout}><MessageCircle /> Place Order on WhatsApp</Button>
          <button type="button" onClick={() => allItems[0] && showAlert("Menu ready", `${allItems.length} items available to order now.`, "info")} className="mt-3 flex w-full items-center justify-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground transition hover:text-primary">
            <X className="h-3.5 w-3.5" /> Full menu active
          </button>
        </div>
      </div>
    </aside>
  );
}
