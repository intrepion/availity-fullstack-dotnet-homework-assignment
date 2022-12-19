namespace EnrollmentLibrary;

public class EnrolleeSorter
{
    public static List<Enrollee> Sort(List<Enrollee> enrollees)
    {
        return enrollees
            .Select(enrollee => {
                var names = enrollee.Name.Split(" ");
                return new EnrolleeDomain { FirstName = names[0], LastName = names[names.Length - 1] };
            })
            .OrderBy(enrolleeDomain => enrolleeDomain.FirstName)
            .OrderBy(enrolleeDomain => enrolleeDomain.LastName)
            .Select(enrolleeDomain => new Enrollee { Name = enrolleeDomain.FirstName + " " + enrolleeDomain.LastName })
            .ToList();
    }
}
