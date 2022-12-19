using CsvHelper;
using EnrollmentLibrary;
using System.Globalization;

if (args.Length == 0)
{
    Console.WriteLine("usage: EnrollmentConsole <csv file>");

    return;
}

var filename = args[0];

using (var reader = new StreamReader(filename))
using (var csvReader = new CsvReader(reader, CultureInfo.InvariantCulture))
{
    var records = csvReader.GetRecords<Enrollee>().ToList();
    var separated = EnrolleeSeparator.Separate(records);
    foreach (var (company, value) in separated)
    {
        var enrollees = value.Values.ToList();
        var sorted = EnrolleeSorter.Sort(enrollees);
        using (var writer = new StreamWriter($"{filename}.{company}.csv"))
        using (var csvWriter = new CsvWriter(writer, CultureInfo.InvariantCulture))
        {
            csvWriter.WriteRecords(sorted);
        }
    }
}
