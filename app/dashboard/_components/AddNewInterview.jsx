"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

function AddNewInterview() {
  const [openDialog, setOpenDialog] = useState(false);
  const [jobPosition, setJobPosition] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [yearsOfExperience, setYearsOfExperience] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({ jobPosition, jobDescription, yearsOfExperience });
    setOpenDialog(false);
    console.log("Interview Started Successfully!");
  }

  return (
    <>
      {/* Add New Interview Button */}
      <div
        className="p-5 border rounded-lg border-gray-300 cursor-pointer transition-all duration-300 
        hover:scale-105 hover:shadow-lg bg-white hover:bg-gray-100 flex flex-col items-center"
        onClick={() => setOpenDialog(true)}
      >
        <h2 className="text-lg font-semibold text-gray-700">+ Add New Interview</h2>
      </div>

      {/* Dialog for Job Details */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent className="max-w-lg p-6 rounded-lg">
          <DialogHeader>
            <DialogTitle className="text-2xl font-semibold text-gray-800">
              Job Interview Details
            </DialogTitle>
            <DialogDescription className="text-gray-600">
              Please enter relevant details about the job position, required skills, and experience level.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={onSubmit}>
            {/* Job Information Form */}
            <div className="space-y-4 mt-4">
              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Job Position / Role<span className="text-red-800 text-base pl-1">*</span>
                </label>
                <Input
                  placeholder="e.g., Full Stack Developer"
                  className="border border-gray-300 rounded-md p-2"
                  required
                  onChange={(e) => setJobPosition(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Job Description / Tech Stack<span className="text-red-800 text-base pl-1">*</span>
                </label>
                <Textarea
                  placeholder="e.g., React, Node.js, MongoDB"
                  className="border border-gray-300 rounded-md p-2"
                  required
                  onChange={(e) => setJobDescription(e.target.value)}
                />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-medium text-gray-700">
                  Years of Experience<span className="text-red-800 text-base pl-1">*</span>
                </label>
                <Input
                  type="number"
                  max="50"
                  placeholder="e.g., 3 Years"
                  className="border border-gray-300 rounded-md p-2"
                  required
                  onChange={(e) => setYearsOfExperience(e.target.value)}
                />
              </div>
            </div>

            {/* Dialog Actions */}
            <div className="flex justify-end gap-4 mt-6">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-all"
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition-all"
              >
                Start Interview
              </button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default AddNewInterview;
