import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  FileText,
  Search,
  Sparkles,
  Upload,
} from "lucide-react";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import { rfpService } from "../services/rfpService";

export default function NewRFP() {
  const navigate = useNavigate();

  const [text, setText] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const [analyzing, setAnalyzing] = useState(false);
  const [error, setError] = useState("");

  const handleFile = (event) => {
    const selectedFile = event.target.files?.[0];

    if (!selectedFile) return;

    setFile(selectedFile);
    setFileName(selectedFile.name);
    setError("");
  };

  const handleAnalyze = async () => {
  if (!file && !text.trim()) {
    setError("Please upload an RFP PDF or paste the requirements.");
    return;
  }

  setError("");
  setAnalyzing(true);

  try {
    let result;

    if (file) {
      console.log("Uploading RFP:", file.name);

      result = await rfpService.upload(file);

      console.log("RFP API RESULT:", result);

      // Make sure we actually received something
      if (!result) {
        throw new Error("The RFP API returned an empty response.");
      }

      // Store the complete backend response
      sessionStorage.setItem(
        "rfpResult",
        JSON.stringify(result)
      );

      // IMPORTANT:
      // RFPWorkspace expects `rfpResult`
      navigate("/rfp/workspace", {
        state: {
          rfpResult: result,
        },
      });

      return;
    }

    // Text-only input is still not connected
    setError(
      "Please upload the RFP PDF. Text-only analysis is not connected yet."
    );
  } catch (err) {
    console.error("RFP upload failed:", err);

    setError(
      err?.message ||
        "Failed to process the RFP. Check that the backend is running."
    );
  } finally {
    setAnalyzing(false);
  }
};

  return (
    <div className="relative min-h-screen overflow-hidden">

      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">

        <div className="absolute left-[4%] top-[15%] h-80 w-80 rounded-full bg-[#315CFF]/[0.035] blur-3xl" />

        <div className="absolute right-[5%] top-[35%] h-96 w-96 rounded-full bg-[#5BD6E8]/[0.035] blur-3xl" />

      </div>

      {/* HEADER */}

      <section className="relative mx-auto max-w-[1500px] px-6 pb-14 pt-20 md:px-10 md:pt-28">

        <Link
          to="/rfp"
          className="editorial-link flex items-center gap-2 text-xs text-[#777871] transition hover:text-[#315CFF]"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Back to bids
        </Link>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_300px]">

          <div>

            <div className="mb-7 text-[10px] font-semibold uppercase tracking-[0.22em] text-[#315CFF]">
              Intake / 01
            </div>

            <h1 className="page-title">
              Give Bid-Memory
              <br />
              something to
              <br />
              <span className="text-[#315CFF]">
                remember.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-7 text-[#6E706D]">
              Upload an RFP and Bid-Memory will connect
              its requirements with your company's previous
              proposals, evidence, and historical patterns.
            </p>

          </div>

          <div className="self-end border-t border-[#D8D7D1] pt-6 lg:border-l lg:border-t-0 lg:pl-8">

            <div className="mb-6 text-[10px] uppercase tracking-[0.2em] text-[#969792]">
              Process
            </div>

            <div className="space-y-5">

              <Step
                number="01"
                title="Understand"
                active={!analyzing}
              />

              <Step
                number="02"
                title="Remember"
                active={analyzing}
              />

              <Step
                number="03"
                title="Respond"
                active={false}
              />

            </div>

          </div>

        </div>

      </section>

      {/* INPUT */}

      <section className="relative mx-auto max-w-[1500px] px-6 pb-24 md:px-10 md:pb-36">

        <div className="relative overflow-hidden border border-[#D8D7D1] bg-white/55 backdrop-blur-sm">

          <div className="absolute right-8 top-8 z-10 text-[9px] uppercase tracking-[0.2em] text-[#A0A19C]">
            INPUT / 01
          </div>

          <div className="grid min-h-[560px] lg:grid-cols-2">

            {/* LEFT */}

            <div className="flex flex-col justify-between border-b border-[#D8D7D1] p-8 md:p-14 lg:border-b-0 lg:border-r">

              <div>

                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-full border border-[#D8D7D1]">

                  <FileText className="h-5 w-5" />

                </div>

                <h2 className="max-w-xl text-4xl font-medium tracking-[-0.055em] md:text-6xl">

                  Start with the
                  <br />

                  <span className="text-[#315CFF]">
                    brief.
                  </span>

                </h2>

                <p className="mt-7 max-w-md text-sm leading-6 text-[#777871]">

                  Upload the RFP PDF and let the
                  Bid-Memory pipeline extract requirements,
                  search historical memory, and generate
                  the proposal.

                </p>

              </div>

              <label className="mt-12 flex cursor-pointer items-center gap-4 border-t border-[#D8D7D1] pt-6">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#111318] text-white transition duration-500 hover:bg-[#315CFF]">

                  <Upload className="h-4 w-4" />

                </div>

                <div>

                  <div className="text-sm font-medium">
                    Upload RFP
                  </div>

                  <div className="mt-1 text-xs text-[#858680]">
                    PDF, DOCX or TXT
                  </div>

                </div>

                <input
                  type="file"
                  accept=".pdf,.doc,.docx,.txt"
                  onChange={handleFile}
                  className="hidden"
                />

              </label>

              {fileName && (

                <div className="mt-5 flex items-center gap-3 text-xs text-[#315CFF]">

                  <Check className="h-4 w-4" />

                  <span className="truncate">
                    {fileName}
                  </span>

                </div>

              )}

            </div>

            {/* RIGHT */}

            <div className="flex flex-col p-8 md:p-14">

              <div className="mb-6 flex items-center gap-3">

                <Search className="h-4 w-4 text-[#315CFF]" />

                <span className="text-[10px] uppercase tracking-[0.18em] text-[#858680]">

                  Or paste requirements

                </span>

              </div>

              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder={`Paste the RFP requirements here...

Example:

Enterprise cloud migration
24/7 support
Security compliance
Data migration
Implementation timeline
SLA requirements`}
                className="min-h-[320px] flex-1 resize-none border-b border-[#CFCFC8] bg-transparent py-5 text-base leading-7 outline-none placeholder:text-[#A0A19C] focus:border-[#315CFF]"
              />

              {error && (

                <div className="mt-5 border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>

              )}

              <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">

                <div className="text-xs text-[#858680]">

                  {file
                    ? "RFP ready for analysis"
                    : text.length > 0
                    ? `${text.length} characters`
                    : "Waiting for input"}

                </div>

                <button
                  onClick={handleAnalyze}
                  disabled={analyzing || !file}
                  className="group relative flex items-center justify-center gap-3 bg-[#111318] px-7 py-4 text-sm font-medium text-white transition duration-500 hover:bg-[#315CFF] disabled:cursor-not-allowed disabled:opacity-40"
                >

                  {analyzing ? (

                    <>
                      <span className="relative z-10 h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />

                      <span className="relative z-10 text-white">
                        Processing...
                      </span>
                    </>

                  ) : (

                    <>

                      <span className="relative z-10 text-white">
                        Analyze bid
                      </span>

                      <ArrowUpRight className="relative z-10 h-4 w-4 text-white transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />

                    </>

                  )}

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PROCESSING */}

      {analyzing && (

        <section className="relative border-t border-[#D8D7D1] bg-[#111318] text-white">

          <div className="mx-auto max-w-[1500px] px-6 py-24 md:px-10 md:py-32">

            <div className="mb-12 flex items-center gap-4">

              <div className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#5BD6E8]/30">

                <Sparkles className="h-4 w-4 text-[#5BD6E8]" />

              </div>

              <div>

                <div className="text-[10px] uppercase tracking-[0.2em] text-[#5BD6E8]">
                  Bid-Memory
                </div>

                <div className="mt-1 text-sm text-[#A5A7AE]">
                  Memory system working
                </div>

              </div>

            </div>

            <div className="grid gap-5 md:grid-cols-4">

              <AnalysisStep
                number="01"
                title="Reading requirements"
              />

              <AnalysisStep
                number="02"
                title="Searching company memory"
              />

              <AnalysisStep
                number="03"
                title="Finding evidence"
              />

              <AnalysisStep
                number="04"
                title="Generating proposal"
              />

            </div>

          </div>

        </section>

      )}

    </div>
  );
}

function Step({ number, title, active }) {

  return (

    <div className="flex items-center gap-4">

      <div
        className={`flex h-8 w-8 items-center justify-center rounded-full border text-[9px] ${
          active
            ? "border-[#315CFF] bg-[#315CFF] text-white"
            : "border-[#D8D7D1] text-[#969792]"
        }`}
      >
        {number}
      </div>

      <span
        className={
          active
            ? "text-sm text-[#111318]"
            : "text-sm text-[#969792]"
        }
      >
        {title}
      </span>

    </div>

  );
}

function AnalysisStep({ number, title }) {

  return (

    <div className="relative border border-[#30333A] p-6">

      <div className="mb-8 text-[10px] text-[#6F727A]">
        {number}
      </div>

      <div className="flex items-center gap-3">

        <span className="h-2 w-2 animate-pulse rounded-full bg-[#315CFF]" />

        <span className="text-sm">
          {title}
        </span>

      </div>

    </div>

  );
}