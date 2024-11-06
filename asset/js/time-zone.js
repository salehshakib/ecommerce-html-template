async function loadTimezones() {
  // Fetch the JSON file
  const timezones = [
    { value: "UTC-12:00", label: "UTC-12:00 (Baker Island, Howland Island)" },
    { value: "UTC-11:00", label: "UTC-11:00 (American Samoa, Niue)" },
    {
      value: "UTC-10:00",
      label: "UTC-10:00 (Hawaii-Aleutian Standard Time)",
    },
    { value: "UTC-09:00", label: "UTC-09:00 (Alaska Standard Time)" },
    { value: "UTC-08:00", label: "UTC-08:00 (Pacific Standard Time)" },
    { value: "UTC-07:00", label: "UTC-07:00 (Mountain Standard Time)" },
    { value: "UTC-06:00", label: "UTC-06:00 (Central Standard Time)" },
    { value: "UTC-05:00", label: "UTC-05:00 (Eastern Standard Time)" },
    { value: "UTC-04:00", label: "UTC-04:00 (Atlantic Standard Time)" },
    { value: "UTC-03:00", label: "UTC-03:00 (Argentina, Brazil)" },
    {
      value: "UTC-02:00",
      label: "UTC-02:00 (South Georgia and the South Sandwich Islands)",
    },
    { value: "UTC-01:00", label: "UTC-01:00 (Azores, Cape Verde)" },
    { value: "UTC+00:00", label: "UTC+00:00 (Greenwich Mean Time)" },
    { value: "UTC+01:00", label: "UTC+01:00 (Central European Time)" },
    { value: "UTC+02:00", label: "UTC+02:00 (Eastern European Time)" },
    { value: "UTC+03:00", label: "UTC+03:00 (Moscow, East Africa)" },
    { value: "UTC+04:00", label: "UTC+04:00 (Gulf Standard Time, Samara)" },
    {
      value: "UTC+05:00",
      label: "UTC+05:00 (Pakistan Standard Time, Yekaterinburg)",
    },
    {
      value: "UTC+06:00",
      label: "UTC+06:00 (Bangladesh Standard Time, Omsk)",
    },
    { value: "UTC+07:00", label: "UTC+07:00 (Indochina Time, Novosibirsk)" },
    {
      value: "UTC+08:00",
      label: "UTC+08:00 (China Standard Time, Singapore)",
    },
    {
      value: "UTC+09:00",
      label: "UTC+09:00 (Japan Standard Time, Korea Standard Time)",
    },
    {
      value: "UTC+10:00",
      label: "UTC+10:00 (Australian Eastern Standard Time)",
    },
    { value: "UTC+11:00", label: "UTC+11:00 (Magadan, Solomon Islands)" },
    { value: "UTC+12:00", label: "UTC+12:00 (Fiji, Kamchatka)" },
  ];

  // Find the select element by ID
  const timezoneSelect = document.getElementById("timezone");

  // Loop through the JSON data and create option elements
  timezones.forEach((timezone) => {
    const option = document.createElement("option");
    option.value = timezone.value;
    option.textContent = timezone.label;
    timezoneSelect.appendChild(option);
  });
}

// Call the function to load timezones after the page loads
window.addEventListener("DOMContentLoaded", loadTimezones);
