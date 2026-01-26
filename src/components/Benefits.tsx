import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";
import { urlFor } from "@/lib/sanity.image";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc?: string;
    description?: string;
    image?: any;
    bullets?: {
      title: string;
      desc?: string;
      description?: string;
      icon?: React.ReactNode | string;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  const description = data.desc || data.description || "";
  const imageSrc = data.image?.asset 
    ? urlFor(data.image).width(521).height(521).url()
    : data.image;

  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        {imageSrc && (
          <div
            className={`flex items-center justify-center w-full lg:w-1/2 ${
              props.imgPos === "right" ? "lg:order-1" : ""
            }`}>
            <div>
              <Image
                src={imageSrc}
                width={521}
                height={521}
                alt="Benefits"
                className={"object-cover"}
                placeholder={data.image?.asset ? undefined : "blur"}
                blurDataURL={typeof data.image === 'object' && 'src' in data.image ? data.image.src : undefined}
              />
            </div>
          </div>
        )}

        <div
          className={`flex flex-wrap items-center w-full ${imageSrc ? 'lg:w-1/2' : 'lg:w-full'} ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:leading-tight lg:text-4xl dark:text-white">
                {data.title}
              </h3>

              {description && (
                <p className="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl dark:text-gray-300">
                  {description}
                </p>
              )}
            </div>

            {data.bullets && data.bullets.length > 0 && (
              <div className="w-full mt-5">
                {data.bullets.map((item, index) => (
                  <Benefit key={index} title={item.title} icon={item.icon}>
                    {item.desc || item.description}
                  </Benefit>
                ))}
              </div>
            )}
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  const isStringIcon = typeof props.icon === 'string';
  const isReactIcon = React.isValidElement(props.icon);

  return (
      <div className="flex items-start mt-8 space-x-3">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-indigo-500 rounded-md w-11 h-11 ">
          {isStringIcon ? (
            <span className="text-2xl">{props.icon}</span>
          ) : isReactIcon ? (
            React.cloneElement(props.icon, {
              className: "w-7 h-7 text-indigo-50",
            })
          ) : (
            <span className="text-2xl">✨</span>
          )}
        </div>
        <div>
          <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-500 dark:text-gray-400">
            {props.children}
          </p>
        </div>
      </div>
  );
}
