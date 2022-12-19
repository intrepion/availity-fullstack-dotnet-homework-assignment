namespace EnrollmentLibrary;

public class EnrolleeSeparator
{
    public static Dictionary<string, List<Enrollee>> Separate(List<Enrollee> enrollees)
    {
        var separated = new Dictionary<string, List<Enrollee>>();

        foreach (var enrollee in enrollees)
        {
            if (!separated.ContainsKey(enrollee.Company))
            {
                separated.Add(enrollee.Company, new List<Enrollee>());
            }

            separated[enrollee.Company].Add(enrollee);
        }

        return separated;
    }
}
