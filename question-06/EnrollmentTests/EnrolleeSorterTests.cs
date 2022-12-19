using EnrollmentLibrary;

namespace EnrollmentTests;

public class EnrolleeSorterTests
{
    [Theory]
    [InlineData("Alice Andrews", "Aaron Bob", "Alice Andrews", "Aaron Bob")]
    [InlineData("Bob Carol", "Alice Bob", "Alice Bob", "Bob Carol")]
    [InlineData("James Oliver", "Oliver James", "Oliver James", "James Oliver")]
    public void FirstAndLastNameSortTest(string input1, string input2, string expected1, string expected2)
    {
        var enrollees = new List<Enrollee>
        {
            new Enrollee { Company = "Acme", Id = "1", Name = input1, Version = 1 },
            new Enrollee { Company = "Acme", Id = "2", Name = input2, Version = 1 }
        };

        var sorted = EnrolleeSorter.Sort(enrollees);

        Assert.Equal(expected1, sorted[0].Name);
        Assert.Equal(expected2, sorted[1].Name);
    }
}
