namespace EnrollmentLibrary;

public class EnrolleeSeparator
{
    public static Dictionary<string, Dictionary<string, Enrollee>> Separate(List<Enrollee> enrollees)
    {
        var separated = new Dictionary<string, Dictionary<string, Enrollee>>();

        foreach (var enrollee in enrollees)
        {
            if (!separated.ContainsKey(enrollee.Company))
            {
                separated.Add(enrollee.Company, new Dictionary<string, Enrollee>());
            }

            if (separated[enrollee.Company].ContainsKey(enrollee.Id))
            {
                if (separated[enrollee.Company][enrollee.Id].Version < enrollee.Version)
                {
                    separated[enrollee.Company][enrollee.Id] = enrollee;
                }
            }
            else
            {
                separated[enrollee.Company].Add(enrollee.Id, enrollee);
            }
        }

        return separated;
    }
}
