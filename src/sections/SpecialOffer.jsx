import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
  return (
    <section className="flex jutify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 ">
        <img
          src={offer}
          alt="offer"
          width={773}
          height={687}
          className="object-contain w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          <span className="text-coral-red ">Special</span>
          <span className=" ml-3">Offer</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shoppping journey that redefines your experience with
          unbeatable deals. From premierr selections to incredible savings, wwe
          offerr unparralleled value that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Navigate a realm off possibilities designed to fulfill your unique
          desiresm surpassing the loftiest expectations. Your journey with us is
          nothing short of exceptional
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconURL={arrowRight} />
          <Button
            label="Learn more"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            text-color="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
