import React from "react";
import { Card, CardContent, CardHeader } from "./Card";
import { Chrome, Clock, FileText, Users } from "lucide-react";
import { BsThreeDotsVertical } from "react-icons/bs";

const ActivityCard = () => {
  const activityData = [
    {
      title: "12 Invoices have been paid",
      description: "Invoices have been paid to the company",
      time: "12 min ago",
      type: "invoice",
      attachment: "invoices.pdf",
    },
    {
      title: "Client Meeting",
      description: "Project meeting with John @10:15am",
      time: "45 min ago",
      type: "meeting",
      client: {
        name: "Lester McCarthy",
        role: "CEO of ThemeSelection",
      },
    },
    {
      title: "Create a new project for client",
      description: "6 team members in a project",
      time: "2 Day Ago",
      type: "project",
      teamCount: 3,
    },
  ];

  const browsers = [
    {
      name: "Chrome",
      visits: "8.92k",
      percentage: 64.75,
      color: "bg-green-400",
      iconColor: "text-[#666]",
    },
    {
      name: "Safari",
      visits: "1.29k",
      percentage: 18.43,
      color: "bg-blue-400",
      iconColor: "text-blue-500",
    },
    {
      name: "Firefox",
      visits: "328",
      percentage: 8.37,
      color: "bg-cyan-400",
      iconColor: "text-orange-500",
    },
    {
      name: "Edge",
      visits: "142",
      percentage: 6.12,
      color: "bg-yellow-400",
      iconColor: "text-blue-600",
    },
    {
      name: "Opera",
      visits: "82",
      percentage: 2.12,
      color: "bg-red-400",
      iconColor: "text-red-600",
    },
    {
      name: "UC Browser",
      visits: "328",
      percentage: 20.14,
      color: "bg-orange-400",
      iconColor: "text-orange-600",
    },
  ];

  return (
    <div className="flex gap-6 pt-12 min-w-[112%]">
      {/* Activity Timeline Card */}
      <Card className="flex-1 ">
        <div className="flex justify-between items-center p-8">
          <div>
            <h5 className="text-xl font-semibold text-[#384551]">
              Activity Timeline
            </h5>
          </div>
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
        <CardContent>
          <div className="space-y-8 ">
            {activityData.map((activity, index) => (
              <div key={index} className="flex items-start space-x-4 ">
                <div
                  className={`mt-1 w-2 h-2 rounded-full ${
                    activity.type === "invoice"
                      ? "bg-blue-500"
                      : activity.type === "meeting"
                      ? "bg-green-500"
                      : "bg-cyan-500"
                  }`}
                />
                <div className="flex-1 ">
                  <div className="flex justify-between items-start ">
                    <h4 className="text-1xl font-semibold text-[#000000]">
                      {activity.title}
                    </h4>
                    <span className="text-1xl text-gray-400 font-semibold">
                      {activity.time}
                    </span>
                  </div>
                  <p className="text-sm text-[#6B7280] mt-1 font-semibold">
                    {activity.description}
                  </p>
                  {activity.attachment && (
                    <div className="flex items-center space-x-2 mt-2 rounded-md font-semibold">
                      <FileText size={20} className="text-red-500 " />
                      <span className="text-1xl text-gray-600 bg-gray-200 rounded-md px-2">
                        {activity.attachment}
                      </span>
                    </div>
                  )}
                  {activity.client && (
                    <div className="flex items-center space-x-2 mt-2">
                      <img
                        src={activity.client.imageUrl || "/profile.png"}
                        alt={`${activity.client.name}'s avatar`}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-1xl font-medium">
                          {activity.client.name}
                        </p>
                        <p className="text-1xl text-gray-500">
                          {activity.client.role}
                        </p>
                      </div>
                    </div>
                  )}
                  {activity.teamCount && (
                    <div className="flex items-center space-x-1 mt-2">
                      {["client1.png", "client-2.png", "client-3.png"].map(
                        (image, i) => (
                          <img
                            key={i}
                            src={`/public/${image}`}
                            alt={`client ${i + 1}`}
                            className="w-6 h-6 rounded-full -ml-2 first:ml-0"
                          />
                        )
                      )}
                      <span className="text-1xl text-gray-500 bg-gray-200 w-6 h-6 rounded-full ">
                        +3
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Browser Stats Card */}
      <Card className=" flex-1 p-8 ">
        <CardHeader className="px-0 pt-0">
          <div className="flex space-x-6 text-sm font-medium text-[#384551]">
            <div className="bg-blue-500 text-white px-4 py-1 rounded-md">
              Browser
            </div>
            <div>Operating System</div>
            <div>Country</div>
          </div>
        </CardHeader>
        <CardContent className="px-0">
          <div className="space-y-8">
            <div className="grid grid-cols-12 text-sm text-[#384551] mb-2 font-semibold">
              <div className="col-span-1">NO</div>
              <div className="col-span-3">BROWSER</div>
              <div className="col-span-2">VISITS</div> 
              <div className="col-span-6">DATA IN PERCENTAGE</div>
            </div>

            {browsers.map((browser, index) => (
              <div
                key={browser.name}
                className="grid grid-cols-12 items-center "
              >
                <div className="col-span-1 text-sm text-[#384551] font-semibold">
                  {index + 1}
                </div>
                <div className="col-span-3 flex items-center gap-2">
                  <img
                    src={`/public/${browser.name.toLowerCase()}.png`}
                    alt={browser.name}
                    className={`h-6 w-6 ${browser.iconColor}`}
                  />
                  <span className="text-1xl text-[#384551] font-semibold">
                    {browser.name}
                  </span>
                </div>
                <div className="col-span-2 text-1xl font-semibold">
                  {browser.visits}
                </div>
                <div className="col-span-6 flex items-center gap-4">
                  <div className="flex-1 bg-gray-100 rounded-full h-2">
                    <div
                      className={`${browser.color} h-2 rounded-full`}
                      style={{ width: `${browser.percentage}%` }}
                    ></div>
                  </div>
                  <span className="text-sm w-16">{browser.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ActivityCard;
