import { BentoGrid, BentoGridItem } from "@/components/animation/bento-grid";
import { ContainerScroll } from "@/components/animation/scroll-image-animation";
import { Button } from "@/components/ui/button";
import {
  Building2,
  Car,
  CircleArrowRight,
  Gamepad2,
  Hospital,
  Landmark,
  Mail,
  Phone,
  Proportions,
  ScrollText,
  Store,
  Truck,
} from "lucide-react";
import Image from "next/image";
import { FaWordpressSimple } from "react-icons/fa";
import { RiGovernmentLine, RiSeoLine } from "react-icons/ri";
import {
  FaInstagram,
  FaLinkedin,
  FaMeta,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { TbDeviceMobileCog } from "react-icons/tb";
import { MdWeb } from "react-icons/md";
import { StickyScroll } from "@/components/animation/sticky-scroll-reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <>
      <div className="h-[100vh] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex items-center justify-center">
        <div class="absolute inset-0 z-10 h-full w-full bg-white [background:radial-gradient(170%_190%_at_80%_10%,transparent_40%,#e5540f_100%)] -rotate-[180deg]"></div>
        <div class="absolute inset-0 z-10 h-full w-full bg-white [background:radial-gradient(150%_190%_at_20%_20%,transparent_40%,#a8c82e_100%)] rotate-180"></div>
        <div class="absolute inset-0 z-10 h-full w-full bg-white [background:radial-gradient(100%_100%_at_50%_10%,transparent_40%,white_100%)]"></div>

        <div className="relative z-20 py-8 text-center flex flex-col justify-center items-center">
          <p
            className="w-[43%] font-bold text-2xl sm:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-slate-600 to-slate-900 leading-snug"
            style={{ lineHeight: "1.2" }}
          >
            We offer premium Web Based Solutions
          </p>
          <p className="mt-8 w-[60%]">
            We are a web design agency helping businesses of all size get a
            better return from online activities. We design and build stunning
            bespoke websites. And we can help with a wide range of online
            marketing strategies. We have a complete Forex CRM Solution under
            one roof with Techysquad - The best Forex CRM Agency.
          </p>
          <div className="mt-8">
            <Button className="text-base p-6 bg-[#e5540f]">Know More</Button>
          </div>
        </div>
      </div>
      <div className="relative">
        <ContainerScroll titleComponent={""}>
          <Image
            src={`/dashboard-ui.png`}
            alt="hero"
            height={720}
            width={1400}
            className="mx-auto rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
      <div className="mt-28 pt-96">
        <div className="pt-28">
          <div className="backdrop-xl p-10 px-12 bg-gradient-to-b from-white/50 to-gray-100  rounded-xl">
            <div className="text-center p-3 mb-10">
              <p className="text-[#a8c82e] text-xl">Trade like a pro</p>
              <h1 className="text-5xl font-semibold mt-4">Forex Solutions</h1>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="relative flex justify-start items-center">
                <Image
                  src={"/forex-side-img-new (1).png"}
                  width={950}
                  height={500}
                  quality={100}
                />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-[rgb(239,246,219)]  cursor-pointer rounded-md p-6 flex flex-col items-center justify-end">
                  <Image
                    src={"/forex-trader-room (1).png"}
                    width={220}
                    height={100}
                  />
                  <h2 className="text-xl font-semibold">Forex Trader Room</h2>
                </div>
                <div className="bg-[rgb(239,246,219)] cursor-pointer rounded-md p-6 flex flex-col items-center justify-end">
                  <Image
                    src={"/multi-ib-level-2 (1).png"}
                    width={180}
                    height={100}
                  />
                  <h2 className="text-xl font-semibold">Multi-Level IB</h2>
                </div>
                <div className="bg-[rgb(239,246,219)] cursor-pointer rounded-md p-6 flex flex-col items-center justify-end">
                  <Image
                    src={"/forex-web-design (1).png"}
                    width={180}
                    height={100}
                  />
                  <h2 className="text-xl font-semibold">Forex Web Design</h2>
                </div>
                <div className="bg-[rgb(239,246,219)] cursor-pointer rounded-md p-6 flex flex-col items-center justify-end">
                  <Image
                    src={"/forex-crm (1).png"}
                    width={180}
                    height={100}
                    className="mb-2"
                  />
                  <h2 className="text-xl font-semibold">CRM Solutions</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" p-3 mt-16 w-[90%] mx-auto">
        <div className="text-center p-3">
          <p className="text-[#e5540f] text-xl">Let's go Live</p>
          <h1 className="text-5xl font-semibold mt-4">Web Based Solutions</h1>
        </div>
        <div className="mt-10">
          <BentoGrid className={"gap-10"}>
            <BentoGridItem
              title={"Web Design Agency"}
              titleCSS={"text-2xl text-black"}
              description={
                <>
                  <p className="mb-3">
                    Expert web design agency crafting visually stunning and
                    highly functional websites to elevate your brand.
                  </p>
                  {/* <Link href="#" className="text-[#e5540f]">
                    View More
                  </Link> */}
                </>
              }
              icon={
                <Button
                  className="bg-[#e5540f] rounded-full mb-2"
                  style={{ padding: "45px 20px" }}
                >
                  <Building2 size={50} className="text-slate-200" />
                </Button>
              }
              descriptionCSS={"text-slate-700"}
              className={
                "backdrop-blur-xl bg-[rgb(239,246,219)]  border-none p-8 "
              }
            />
            <BentoGridItem
              title={"Branding Solutions"}
              titleCSS={"text-2xl text-black"}
              description={
                <>
                  <p className="mb-3">
                    Expert branding solutions that elevate your business
                    identity with creative and impactful designs.
                  </p>
                  {/* <Link href="#" className="text-[#e5540f]">
                    View More
                  </Link> */}
                </>
              }
              icon={
                <Button
                  className="bg-[#e5540f] rounded-full mb-2"
                  style={{ padding: "45px 20px" }}
                >
                  <Proportions size={50} className="text-slate-200" />
                </Button>
              }
              descriptionCSS={"text-slate-700"}
              className={
                "backdrop-blur-xl bg-[rgb(239,246,219)]  border-none  p-8 "
              }
            />
            <BentoGridItem
              title={"Wordpress Development"}
              titleCSS={"text-2xl text-black"}
              description={
                <>
                  <p className="mb-3">
                    Expert WordPress development services for custom themes,
                    plugins, and site optimization.
                  </p>
                  {/* <Link href="#" className="text-[#e5540f]">
                    View More
                  </Link> */}
                </>
              }
              icon={
                <Button
                  className="bg-[#e5540f] rounded-full mb-2"
                  style={{ padding: "45px 20px" }}
                >
                  <FaWordpressSimple className="text-slate-200 text-5xl" />
                </Button>
              }
              descriptionCSS={"text-slate-700"}
              className={
                "backdrop-blur-xl bg-[rgb(239,246,219)]  border-none  p-8 "
              }
            />
            <BentoGridItem
              title={"SEO Services"}
              titleCSS={"text-2xl text-black"}
              description={
                <>
                  <p className="mb-3">
                    Boost your online visibility and drive organic traffic with
                    our expert SEO strategies. Optimize your website for better
                    search rankings today!
                  </p>
                  {/* <Link href="#" className="text-[#e5540f]">
                    View More
                  </Link> */}
                </>
              }
              icon={
                <Button
                  className="bg-[#e5540f] rounded-full mb-2"
                  style={{ padding: "45px 20px" }}
                >
                  <RiSeoLine className="text-slate-200 text-5xl" />
                </Button>
              }
              descriptionCSS={"text-slate-700"}
              className={
                "backdrop-blur-xl bg-[rgb(239,246,219)]  border-none  p-8 "
              }
            />
            <BentoGridItem
              title={"Social Media Management"}
              titleCSS={"text-2xl text-black"}
              description={
                <>
                  <p className="mb-3">
                    Effortlessly manage your social media presence with our
                    comprehensive tools, from scheduling posts to analyzing
                    engagement, all in one place.
                  </p>
                </>
              }
              icon={
                <Button
                  className="bg-[#e5540f] rounded-full mb-2"
                  style={{ padding: "45px 20px" }}
                >
                  <TbDeviceMobileCog className="text-slate-200 text-5xl" />
                </Button>
              }
              descriptionCSS={"text-slate-700"}
              className={
                "backdrop-blur-xl bg-[rgb(239,246,219)]  border-none  p-8 "
              }
            />
            <BentoGridItem
              title={"Web Development"}
              titleCSS={"text-2xl text-black"}
              description={
                <>
                  <p className="mb-3">
                    Creating responsive, user-friendly websites with the latest
                    technologies. Tailored web development solutions for your
                    business.
                  </p>
                </>
              }
              icon={
                <Button
                  className="bg-[#e5540f] rounded-full mb-2"
                  style={{ padding: "45px 20px" }}
                >
                  <MdWeb className="text-slate-200 text-5xl" />
                </Button>
              }
              descriptionCSS={"text-slate-700"}
              className={
                "backdrop-blur-xl bg-[rgb(239,246,219)]  border-none p-8"
              }
            />
          </BentoGrid>
        </div>
      </div>
      <div className="mt-16 p-5 px-10">
        <div className=" relative rounded-2xl ">
          <div className="inset-0 rounded-2xl left-0 z-10 h-[550px] w-[100%] absolute bg-[url(/USD.png)] bg-right"></div>
          <div className="grid grid-cols-2 gap-6 relative z-30 p-9">
            <div className="p-10">
              <h3 className="text-[#a8c82e] text-5xl font-bold">
                Grow Your Bussiness
              </h3>
              <p className="my-4 mb-10 leading-relaxed text-xl text-slate-300">
                Every website that we create is designed and built by our team
                of friendly web designers and you have full content management
                so that you can update your website whenever you wish.
              </p>
              <Button className="text-lg p-6 bg-[#e5540f] hover:bg-[#a8c82e]">
                Get in Touch
              </Button>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"/growth (1).png"}
                width={550}
                height={700}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 pb-5 px-10">
        <div className="text-center p-3">
          <p className="text-[#a8c82e] text-lg">Vast Range</p>
          <h1 className="text-5xl font-semibold my-3">Our Clients</h1>
          <div className="">
            <p className=" w-[60%] mx-auto">
              Please explore the services and packages that we offer, read some
              of the reviews about what our existing clients say and take a look
              at the quality our work. If you are looking to find a website
              design agency then we’d love to hear from you.
            </p>
          </div>
        </div>
        <div className="mt-10 px-16">
          <div className="grid grid-cols-4 gap-4">
            <div className="flex justify-start items-center bg-gray-100 p-3 px-5 rounded-lg">
              <Button className="bg-[#e5540f] mr-3 py-9 mb-3 rounded-full">
                <Car size={40} />
              </Button>
              <h5 className="text-xl font-semibold">Automotive</h5>
            </div>
            <div className="flex justify-start items-center bg-gray-100 p-3 px-5 rounded-lg">
              <Button className="bg-[#e5540f] mr-3 py-9 mb-3 rounded-full">
                <Store size={40} />
              </Button>
              <h5 className="text-xl font-semibold">Retail</h5>
            </div>
            <div className="flex justify-start items-center bg-gray-100 p-3 px-5 rounded-lg">
              <Button className="bg-[#e5540f] mr-3 py-9 mb-3 rounded-full">
                <Hospital size={40} />
              </Button>
              <h5 className="text-xl font-semibold">Healthcare</h5>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-3 px-5 rounded-lg">
              <Button className="bg-[#e5540f] mr-3 py-9 mb-3 rounded-full">
                <Gamepad2 size={40} />
              </Button>
              <h5 className="text-xl font-semibold">Entertainment & Gaming</h5>
            </div>
            <div className="flex justify-start items-center bg-gray-100 p-3 px-5 rounded-lg">
              <Button className="bg-[#e5540f] mr-3 py-9 mb-3 rounded-full">
                <Truck size={40} />
              </Button>
              <h5 className="text-xl font-semibold">Transportation</h5>
            </div>
            <div className="flex justify-start items-center bg-gray-100 p-3 px-5 rounded-lg">
              <Button className="bg-[#e5540f] mr-3 py-9 mb-3 rounded-full">
                <ScrollText size={40} />
              </Button>
              <h5 className="text-xl font-semibold">Print Media</h5>
            </div>
            <div className="flex justify-start items-center bg-gray-100 p-3 px-5 rounded-lg">
              <Button className="bg-[#e5540f] mr-3 py-9 mb-3 rounded-full">
                <Landmark size={40} />
              </Button>
              <h5 className="text-xl font-semibold">BFSI</h5>
            </div>
            <div className="flex justify-between items-center bg-gray-100 p-3 px-5 rounded-lg">
              <Button className="bg-[#e5540f] mr-3 py-9 mb-3 rounded-full">
                <RiGovernmentLine className="text-4xl text-white" />
              </Button>
              <h5 className="text-xl font-semibold">
                Government & Public Sector
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 px-10">
        <div className="text-center p-3">
          <p className="text-[#e5540f] text-lg">Our Benefits</p>
          <h1 className="text-5xl font-semibold my-3">Why Choose Us?</h1>
        </div>
        <div className="w-[90%] mx-auto">
          <StickyScroll
            content={[
              {
                title: "Professional Service",
                description:
                  "Before we programme a word of code, our dedicated account manager will take a detailed brief from you.",
                content: (
                  <>
                    <div className="flex h-96 w-96 items-center justify-center text-white bg-[rgb(239,246,219)] p-10 rounded-2xl">
                      <Image
                        src="/professional-solutions (1).png"
                        width={300}
                        height={300}
                      />
                    </div>
                  </>
                ),
              },
              {
                title: "Competitive Pricing",
                description:
                  "We offer the most competitive prices by instantly adapting to the demands and prices of our competitors.",
                content: (
                  <>
                    <div className="flex h-96 w-96 items-center justify-center text-white bg-[#a8c82e] p-10 rounded-2xl">
                      <Image
                        src="/competitive-pricing.png"
                        width={340}
                        height={300}
                      />
                    </div>
                  </>
                ),
              },
              {
                title: "Advanced Technology",
                description:
                  "We are proficient at the latest web technologies, and specialise in open-source platforms.",
                content: (
                  <>
                    <div className="flex h-96 w-96  items-center justify-center text-white bg-[#e5540f] p-10 rounded-2xl">
                      <Image
                        src="/advance-technology (1).png"
                        width={270}
                        height={300}
                      />
                    </div>
                  </>
                ),
              },
              {
                title: "Flexible Approach",
                description:
                  "Our experts take a customer-centric approach to deliver bespoke technology solutions that meet your expectations, timelines and budget.",
                content: (
                  <>
                    <div className="flex h-96 w-96  items-center justify-center text-white bg-gray-800 p-10 rounded-2xl">
                      <Image
                        src="/flexible-route (1).png"
                        width={300}
                        height={300}
                      />
                    </div>
                  </>
                ),
              },
              {},
            ]}
          />
        </div>
      </div>
      <div className="mt-16 px-10">
        <div className="grid grid-cols-3 gap-5">
          <div className="bg-[rgb(239,246,219)] p-8 flex flex-col justify-center items-center rounded-xl">
            <h2 className="text-[#e5540f] text-7xl font-bold mb-3">500+</h2>
            <p className="text-4xl font-semibold text-gray-700">
              Satisfied Clients
            </p>
          </div>
          <div className="bg-[rgb(239,246,219)] p-8 flex flex-col justify-center items-center rounded-xl">
            <h2 className="text-[#e5540f] text-7xl font-bold mb-3">90%</h2>
            <p className="text-4xl font-semibold text-gray-700">
              Repeat Business
            </p>
          </div>
          <div className="bg-[rgb(239,246,219)] p-8 flex flex-col justify-center items-center rounded-xl">
            <h2 className="text-[#e5540f] text-7xl font-bold mb-3">15+</h2>
            <p className="text-4xl font-semibold text-gray-700">
              Years of Experience
            </p>
          </div>
        </div>
      </div>
      <div className="mt-16 p-5 px-10">
        <div className=" relative rounded-2xl ">
          <div className="inset-0 rounded-2xl left-0 z-10 h-[550px] w-[100%] absolute bg-[url(/USD.png)] bg-right"></div>
          <div className="grid grid-cols-2 gap-6 relative z-30 p-9">
            <div className="p-10">
              <h3 className="text-white text-5xl font-bold">
                Join Our Newsletter
              </h3>
              <div className="flex justify-start items-center mt-12">
                <Input className="text-lg p-8 rounded-r-none border-2 border-white" />
                <Button className="rounded-l-none text-lg p-6 py-9 bg-[#e5540f] hover:bg-[#a8c82e]">
                  Subscribe Now
                </Button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <Image
                src={"/join-newsletter (1).png"}
                width={530}
                height={700}
                quality={100}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 px-10">
        <div className="text-center p-3 mb-10">
          <p className="text-[#a8c82e] text-xl">Read With Us</p>
          <h1 className="text-5xl font-semibold mt-4">Our Latest Blog</h1>
        </div>
        <div className="grid grid-cols-3 gap-8">
          <div className="bg-white flex flex-col justify-center items-start rounded-xl border group/blogcard cursor-pointer hover:shadow-xl transition-all duration-300">
            <Image
              src={"/test.png"}
              width={500}
              height={300}
              className="rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mt-6">
                Tips to Select the Ideal Forex Technology Provider
              </h3>
              <p className="mt-3">
                The Forex market is the primary financial market that continues
                to draw in increasing numbers of investors and traders seeking
                capital growth each year. Advanced online trading has
                significantly evolved,...
              </p>
              <Button className="bg-transparent hover:bg-transparent p-0 mt-5 group-hover/blogcard:ml-5 transition-all duration-300">
                <CircleArrowRight
                  size={40}
                  strokeWidth={1}
                  className="text-[#e5540f]"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white flex flex-col justify-center items-start rounded-xl border group/blogcard cursor-pointer hover:shadow-xl transition-all duration-300">
            <Image
              src={"/test.png"}
              width={500}
              height={300}
              className="rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mt-6">
                Tips to Select the Ideal Forex Technology Provider
              </h3>
              <p className="mt-3">
                The Forex market is the primary financial market that continues
                to draw in increasing numbers of investors and traders seeking
                capital growth each year. Advanced online trading has
                significantly evolved,...
              </p>
              <Button className="bg-transparent hover:bg-transparent p-0 mt-5 group-hover/blogcard:ml-5 transition-all duration-300">
                <CircleArrowRight
                  size={40}
                  strokeWidth={1}
                  className="text-[#e5540f]"
                />
              </Button>
            </div>
          </div>
          <div className="bg-white flex flex-col justify-center items-start rounded-xl border group/blogcard cursor-pointer hover:shadow-xl transition-all duration-300">
            <Image
              src={"/test.png"}
              width={500}
              height={300}
              className="rounded-t-xl"
            />
            <div className="p-5">
              <h3 className="text-xl font-semibold mt-6">
                Tips to Select the Ideal Forex Technology Provider
              </h3>
              <p className="mt-3">
                The Forex market is the primary financial market that continues
                to draw in increasing numbers of investors and traders seeking
                capital growth each year. Advanced online trading has
                significantly evolved,...
              </p>
              <Button className="bg-transparent hover:bg-transparent p-0 mt-5 group-hover/blogcard:ml-5 transition-all duration-300">
                <CircleArrowRight
                  size={40}
                  strokeWidth={1}
                  className="text-[#e5540f]"
                />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 px-10">
        <div className="text-center p-3 mb-10">
          <h1 className="text-5xl font-semibold mt-4">FAQs</h1>
        </div>
        <div className="w-[80%] mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              className="bg-gray-100 p-4 py-2 rounded-xl mb-4"
              value="item-1"
            >
              <AccordionTrigger className="text-xl text-[#a8c82e]">
                Why choose Techysquad team for your web application?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Techysquad is web design agency delivering expert and cost
                effective solutions. <br /> Our experts take a customer-centric
                approach to deliver bespoke technology solutions that meet your
                expectations, timelines and budget.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-gray-100 p-4 py-2 rounded-xl mb-4"
              value="item-2"
            >
              <AccordionTrigger className="text-xl text-[#e5540f]">
                What services do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Our service offerings include website design, usability, web
                development, e-Marketing, application development, e-Commerce,
                search engine optimisation (SEO), Forex CRM, hosting and a range
                of other interactive products.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-gray-100 p-4 py-2 rounded-xl mb-4"
              value="item-3"
            >
              <AccordionTrigger className="text-xl text-[#a8c82e]">
                Do you provide maintenance of web application?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                We are a full-service software development company that offers
                design, development, deployment, and maintenance services.
                Software application maintenance is as important as development
                because it keeps the application healthy and relevant.
                <br /> <br />
                Our maintenance services include enhancements, optimizations,
                troubleshooting and preventive maintenance.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              className="bg-gray-100 p-4 py-2 rounded-xl mb-4"
              value="item-4"
            >
              <AccordionTrigger className="text-xl text-[#e5540f]">
                What different pricing models do you offer?
              </AccordionTrigger>
              <AccordionContent className="text-base">
                Techysquad provides a flexible approach by providing two models.
                <br /> <br />
                <span className="font-semibold">
                  DTM (Dedicated Team Model)
                </span>{" "}
                This model gives companies long-term access to a dedicated team
                of professionals by screening based on matching experience and
                skills.
                <br /> <br />
                <span className="font-semibold">
                  FPM (Fixed Price Model)
                </span>{" "}
                In this model, timelines and budgets are set by clients and
                service providers to meet standards and achieve short-term
                goals.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <div className="mt-20 p-10 bg-gray-100">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-span-2">
            <Image src={"/logotechysquad-dark.png"} width={360} height={100} />
            <p className="p-5 pl-0">
              We have an innovative way of working, removing unnecessary costs,
              offering lower prices than other similar web design agencies.
              Please explore the services and packages that we offer, read some
              of the reviews about what our existing clients say and take a look
              at the quality our work. If you are looking to find a website
              design agency then we’d love to hear from you.
            </p>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div>
              <h5 className="text-3xl font-semibold">Services</h5>
              <ul className="mt-4 text-lg">
                <li className="mb-3">Web Development</li>
                <li className="mb-3">Forex CRM Development</li>
                <li className="mb-3">Social Media Marketing</li>
                <li className="mb-3">Wordpress Development</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div>
              <h5 className="text-3xl font-semibold">Offices</h5>
              <ul className="mt-4 text-lg">
                <li className="mb-3">Dubai</li>
                <li className="mb-3">UK</li>
                <li className="mb-3">India</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div>
              <h5 className="text-3xl font-semibold">Quick Links</h5>
              <ul className="mt-4 text-lg">
                <li className="mb-3">Home</li>
                <li className="mb-3">Services</li>
                <li className="mb-3">About</li>
                <li className="mb-3">Contact</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-start items-center">
            <div>
              <h5 className="text-3xl font-semibold">Contact</h5>
              <ul className="mt-4 text-lg">
                <li className="mb-3">
                  <Button className="flex justify-start pl-0 items-center bg-transparent hover:bg-transparent text-black">
                    <Phone className="mr-2 text-[#a8c82e]" />
                    <p>+971 55 634 9271</p>
                  </Button>
                </li>
                <li className="mb-3">
                  <Button className="flex justify-start pl-0 items-center bg-transparent hover:bg-transparent text-black">
                    <Phone className="mr-2 text-[#a8c82e]" />
                    <p>+971 50 786 6593</p>
                  </Button>
                </li>
                <li className="mb-3">
                  <Button className="flex justify-start pl-0 items-center bg-transparent hover:bg-transparent text-black">
                    <Mail className="mr-2 text-[#a8c82e]" />
                    <p>contact@techysquad.com</p>
                  </Button>
                </li>
                <li className="mb-3">
                  <div className="flex justify-between items-center">
                    <FaMeta className="text-2xl" />
                    <FaInstagram className="text-2xl" />
                    <FaLinkedin className="text-2xl" />
                    <FaXTwitter className="text-2xl" />
                    <FaYoutube className="text-2xl" />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border border-gray-300" />
        <p>
          <span className="font-semibold">Disclaimer :</span>
          <br />
          If you feel any suspicious person contacting you on behalf of
          Techysquad, please connect with us on email: contact@techysquad.com
          <br />
          Wait for our official invoice from the official account department
          email id which is crm@techysquad.com and then do the payment.
          <br />
          <br />
          The website is owned by Techysquad and operated by TECHYSQUAD IT
          INFRASTRUCTURE CO. L.L.C, registration number 2253845 which is
          incorporated under the laws of Dubai, UAE as an Limited Liability
          Company.
          <br />
          <br />
          Our CRM services are not intended for use by any company or person in
          any country or jurisdiction where such distribution or use would be
          contrary to local law or regulation.
          <br />
          <br />
          <span className="font-semibold">Licensed by :</span>
          <br />
          TECHYSQUADD LTD (UK) : 12298342
          <br />
          TECHYSQUAD IT INFRASTRUCTURE CO. L.L.C (DUBAI) : 2253845
        </p>
        <hr className="my-6 border border-gray-300" />
      </div>
    </>
  );
}
