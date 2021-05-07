import { useRouter } from "next/router";
import * as json from "./data.json";

const infos = json.infos;

export async function getStaticPaths() {
  const paths = infos.map((info) => {
    return {
      params: { cid: info.id },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps() {
  return {
    props: {
      data: infos,
    },
  };
}

const Cert = ({ data }) => {
  console.log(data);
  const router = useRouter();
  const { cid } = router.query;
  const query = data.filter((d) => d.id == cid);
  console.log(query[0]);
  return (
    <div className="p-8 lg:p-12 xl:p-16">
      <div className="flex flex-col-reverse lg:flex-col">
        <div className="space-y-4 lg:flex lg:flex-row lg:items-center lg:justify-between lg:py-6">
          <h1 className="text-2xl font-medium">
            Certification ID: <strong>{query[0].name}</strong>
          </h1>
          <button className="flex items-center p-3 bg-yellow-100 rounded-md lg:px-5 group hover:bg-yellow-200 hover:font-bold hover:text-yellow-700">
            <div>
              <svg
                className="w-5 h-5 group-hover:animate-bounce"
                width="18"
                height="20"
                viewBox="0 0 18 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.6239 10.3664C17.8647 10.6008 18 10.9187 18 11.2502C18 11.5816 17.8647 11.8995 17.6239 12.1339L9.91625 19.634C9.67535 19.8684 9.34866 20 9.00803 20C8.6674 20 8.34071 19.8684 8.09981 19.634L0.392175 12.1339C0.269482 12.0186 0.171618 11.8807 0.104293 11.7282C0.0369682 11.5757 0.0015307 11.4116 4.85025e-05 11.2457C-0.0014337 11.0797 0.0310691 10.9151 0.0956602 10.7615C0.160251 10.6078 0.255637 10.4683 0.376253 10.3509C0.496868 10.2335 0.640296 10.1407 0.79817 10.0779C0.956043 10.015 1.1252 9.98338 1.29577 9.98482C1.46634 9.98626 1.6349 10.0207 1.79163 10.0863C1.94836 10.1518 2.09011 10.247 2.20861 10.3664L7.72342 15.7327V1.25002C7.72342 0.918492 7.85877 0.600545 8.09968 0.366121C8.34059 0.131698 8.66733 0 9.00803 0C9.34873 0 9.67547 0.131698 9.91638 0.366121C10.1573 0.600545 10.2926 0.918492 10.2926 1.25002V15.7327L15.8075 10.3664C16.0484 10.132 16.375 10.0004 16.7157 10.0004C17.0563 10.0004 17.383 10.132 17.6239 10.3664Z"
                  fill="#C27803"
                />
              </svg>
            </div>
            <div className="px-2 text-lg font-medium text-yellow-600">
              Download
            </div>
          </button>
        </div>
        <div className="w-full h-64 mb-12 bg-yellow-300"></div>
      </div>
    </div>
  );
};

export default Cert;
