 🧠 Bid-Memory

### Don't start your next proposal from zero. Start with everything you've already learned.

Bid-Memory is an AI-powered RFP response system that transforms historical proposals, evidence, and organizational experience into reusable bid intelligence.

Instead of treating every RFP as a new task, Bid-Memory analyzes the incoming RFP, retrieves relevant historical bid experience, and uses that context to generate a proposal tailored to the requirements.

---

## 🚨 The Problem

Organizations respond to multiple RFPs and proposals, but valuable knowledge from previous bids is often buried inside documents.

Every new proposal can require teams to:

- Read and understand lengthy RFP documents
- Extract important requirements
- Search previous proposals for relevant experience
- Find supporting evidence
- Reuse technical approaches
- Rewrite similar sections repeatedly
- Ensure the response addresses the client's requirements

The result is duplicated effort and organizational knowledge that is difficult to reuse.

---

# 💡 Our Solution

**Bid-Memory turns historical bid experience into organizational memory.**

A user uploads an RFP PDF and Bid-Memory processes it through an AI-powered pipeline:

```text
             RFP PDF
                │
                ▼
        ┌─────────────────┐
        │   PDF Parser    │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │   RFP Analysis  │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │  Bid-Memory     │
        │     Agent       │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │ Historical Bid  │
        │    Evidence     │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │    Proposal     │
        │    Generator    │
        └────────┬────────┘
                 │
                 ▼
        ┌─────────────────┐
        │  Bid Workspace  │
        └─────────────────┘

The result is not simply a generated answer.

It is a memory-informed proposal workspace where users can see:

RFP requirements
AI-generated proposal
Historical supporting sources
Memory confidence
Security and compliance considerations
Risk considerations
Support and maintenance
Historical lessons
✨ Core Features
📄 RFP Upload

Upload an RFP PDF directly from the application.

The backend extracts the document text and sends it through the RFP analysis pipeline.

🔍 RFP Requirement Analysis

The system analyzes the uploaded RFP and identifies important requirements that should be addressed in the response.

The extracted requirements are displayed in the workspace so users can see what the proposal is responding to.

🧠 Bid-Memory Retrieval

Bid-Memory searches historical bid experience to find relevant cases and supporting information.

Historical examples can include areas such as:

Cloud migration
Cloud modernization
Smart city platforms
Digital platforms
ERP transformation

The retrieved information is used as contextual memory for proposal generation.

🤖 AI Proposal Generation

The proposal generator combines:

RFP Analysis
      +
Historical Bid Memory
      ↓
Context-Aware Proposal

The generated response can contain:

Executive summary
Understanding of requirements
Proposed solution
Technical approach
Implementation approach
Security & compliance
Risk considerations
Support & maintenance
Historical lessons
Recommendations
🔎 Evidence & Explainability

The workspace includes an evidence panel showing the historical sources used to inform the response.

Users can see:

Memory Confidence
       +
Supporting Sources
       +
Generated Proposal

This provides context for why the generated response contains particular recommendations or approaches.

♻️ Proposal Regeneration

Users can regenerate the proposal when they want another generated response based on the same RFP analysis and retrieved bid memory.

RFP Analysis
      +
Bid Memory
      ↓
Regenerate
      ↓
New Proposal
✅ Accept Response

Users can accept a generated proposal from the workspace.

Accepted proposal information can be stored locally as part of the current MVP workflow.

🖥️ Application Flow
1. Start a New Bid

The user enters the RFP intake interface.

2. Upload RFP

The RFP PDF is uploaded to the FastAPI backend.

3. Extract Requirements

The PDF parser extracts the document text.

4. Analyze the RFP

The AI analyzes the extracted RFP content.

5. Retrieve Bid Memory

The Bid-Memory agent searches historical bid experience.

6. Generate Proposal

The proposal generator combines RFP analysis with relevant historical memory.

7. Review in Workspace

The generated response is presented in a structured workspace.

8. Accept or Regenerate

The user can accept the response or regenerate it.

🏗️ Architecture
┌──────────────────────────────────────────────────────────┐
│                     React Frontend                       │
│                                                          │
│  Dashboard → New RFP → Upload → Workspace → Memory      │
└──────────────────────────┬───────────────────────────────┘
                           │
                           │ REST API
                           ▼
┌──────────────────────────────────────────────────────────┐
│                     FastAPI Backend                      │
│                                                          │
│  /api/rfp/upload                                         │
│  /api/rfp/regenerate                                     │
│  /api/memory                                             │
│  /api/proposal                                           │
└──────────────────────────┬───────────────────────────────┘
                           │
              ┌────────────┼─────────────┐
              ▼            ▼             ▼
       ┌───────────┐ ┌───────────┐ ┌──────────────┐
       │ PDF Parser│ │ RFP Agent │ │ Bid-Memory   │
       │           │ │ / LLM     │ │ Agent        │
       └───────────┘ └───────────┘ └──────┬───────┘
                                          │
                                          ▼
                                  Historical Cases
                                          │
                                          ▼
                                  Proposal Generator
                                          │
                                          ▼
                                   Generated Proposal
🧰 Tech Stack
Frontend
React
Vite
Tailwind CSS
React Router
Lucide React
Backend
Python
FastAPI
Uvicorn
PDF processing
AI/LLM integration
AI & Memory
RFP analysis
Bid-Memory Agent
Historical bid retrieval
Context-aware proposal generation
📁 Project Structure
BidMemory/
│
├── backend/
│   │
│   ├── app/
│   │   ├── agent/
│   │   │   ├── bidmemory_agent.py
│   │   │   └── tools.py
│   │   │
│   │   ├── api/
│   │   │   ├── feedback.py
│   │   │   ├── memory.py
│   │   │   ├── proposal.py
│   │   │   └── rfp.py
│   │   │
│   │   ├── core/
│   │   │   └── config.py
│   │   │
│   │   ├── models/
│   │   │   ├── feedback.py
│   │   │   ├── proposal.py
│   │   │   └── rfp.py
│   │   │
│   │   ├── services/
│   │   │   ├── bidmemory_agent.py
│   │   │   ├── feedback_service.py
│   │   │   ├── hindsight_service.py
│   │   │   ├── llm_service.py
│   │   │   ├── proposal_service.py
│   │   │   └── rfp_service.py
│   │   │
│   │   └── utils/
│   │       └── pdf_parser.py
│   │
│   ├── data/
│   │   ├── historical_cases/
│   │   └── rfps/
│   │
│   ├── tests/
│   ├── requirements.txt
│   └── .env.example
│
├── frontend/
│   │
│   ├── src/
│   │   ├── components/
│   │   ├── hooks/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── data/
│   │   └── utils/
│   │
│   ├── public/
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md

🔮 Future Scope

The current MVP focuses on the core RFP → Memory → Proposal workflow.

Future versions can expand into:

Persistent organizational memory
Semantic/vector search across large proposal libraries
Proposal versioning
Human feedback loops
Automatic learning from accepted proposals
Advanced requirement coverage analysis
Citation-level evidence
Team collaboration
Proposal analytics
CRM integration
Enterprise document connectors
Role-based access control
Production cloud deployment
🎯 Vision

Every proposal contains knowledge.

Every successful bid contains experience.

Every completed project creates new evidence.

Bid-Memory brings that knowledge together so the next proposal can start from everything the organization has already learned.

💬 Tagline

Don't start your next proposal from zero. Start with everything you've already learned.
