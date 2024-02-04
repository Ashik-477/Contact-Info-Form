import { useState } from "react";
import Swal from "sweetalert2";

const ApplicationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [ideaName, setIdeaName] = useState("");
  const [startupSiteLink, setStartupSiteLink] = useState("");
  const [fbPageLink, setFBPageLink] = useState("");
  const [streamCategory, setStreamCategory] = useState("");
  const [domainType, setDomainType] = useState("");
  const [problem, setProblem] = useState("");
  const [solution, setSolution] = useState("");
  const [cofounderDetails, setCofounderDetails] = useState("");
  const [hasMVP, setHasMVP] = useState("");
  const [pitchDeckFile, setPitchDeckFile] = useState("");
  const [productDemoLink, setProductDemoLink] = useState("");
  const [expectedSupport, setExpectedSupport] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the server
    fetch("https://nsusn-forms.up.railway.app/apply", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        contactNo,
        linkedinLink,
        ideaName,
        startupSiteLink,
        fbPageLink,
        streamCategory,
        domainType,
        problem,
        solution,
        cofounderDetails,
        hasMVP,
        pitchDeckFile,
        productDemoLink,
        expectedSupport,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  };

  const handleAlert = () => {
    Swal.fire({
      title: "Congratulations!",
      text: "Applications Submitted Successfully! We will get back to you soon with further updates.",
      icon: "success",
    });
  };

  return (
    <div id="apply-now" className="pt-28">
      <h1 className="text-center text-4xl font-bold">Application Form</h1>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px]">
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Name
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Email
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Contact No
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                required
              />
            </div>

            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                LinkedIn Link
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={linkedinLink}
                onChange={(e) => setLinkedinLink(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Idea Name
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={ideaName}
                onChange={(e) => setIdeaName(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Startup Site Link
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={startupSiteLink}
                onChange={(e) => setStartupSiteLink(e.target.value)}
                required
              />
            </div>

            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                FB Page Link
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={fbPageLink}
                onChange={(e) => setFBPageLink(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Stream Category
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    className="mr-2 h-5 w-5"
                    type="radio"
                    value="Impact"
                    checked={streamCategory === "Impact"}
                    onChange={(e) => setStreamCategory(e.target.value)}
                  />
                  Impact
                </label>
                <label className="flex items-center">
                  <input
                    className="mr-2 h-5 w-5"
                    type="radio"
                    value="Women-led"
                    checked={streamCategory === "Women-led"}
                    onChange={(e) => setStreamCategory(e.target.value)}
                  />
                  Women-led
                </label>
                <label className="flex items-center">
                  <input
                    className="mr-2 h-5 w-5"
                    type="radio"
                    value="Grassroots"
                    checked={streamCategory === "Grassroots"}
                    onChange={(e) => setStreamCategory(e.target.value)}
                  />
                  Grassroots
                </label>
              </div>
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Domain Type
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={domainType}
                onChange={(e) => setDomainType(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Problem Statement
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Your Solution
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={solution}
                onChange={(e) => setSolution(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium  text-inherit">
                Cofounder Details
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={cofounderDetails}
                onChange={(e) => setCofounderDetails(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Do you have any MVP?
              </label>
              <div className="flex items-center space-x-6">
                <label className="flex items-center">
                  <input
                    className="mr-2 h-5 w-5"
                    type="radio"
                    value="Yes"
                    checked={hasMVP === "Yes"}
                    onChange={(e) => setHasMVP(e.target.value)}
                    required
                  />
                  Yes
                </label>
                <label className="flex items-center">
                  <input
                    className="mr-2 h-5 w-5"
                    type="radio"
                    value="No"
                    checked={hasMVP === "No"}
                    onChange={(e) => setHasMVP(e.target.value)}
                    required
                  />
                  No
                </label>
              </div>
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Pitch Deck File Link
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                onChange={(e) => setPitchDeckFile(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Product Demo Link
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={productDemoLink}
                onChange={(e) => setProductDemoLink(e.target.value)}
                required
              />
            </div>
            <div className="my-3">
              <label className="mb-3 block text-base font-medium text-inherit">
                Expected Support
              </label>
              <input
                className="w-full rounded-xl border-2 border-[#e0e0e0] bg-inherit px-6 py-3 text-base font-medium text-[#6B7280] outline-none focus:border-[#59358a] focus:shadow-md"
                type="text"
                value={expectedSupport}
                onChange={(e) => setExpectedSupport(e.target.value)}
                required
              />
            </div>
            <input
              onClick={handleAlert}
              className="form__button rounded-2xl"
              type="submit"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ApplicationForm;
