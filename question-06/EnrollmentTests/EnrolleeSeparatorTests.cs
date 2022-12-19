using EnrollmentLibrary;

namespace EnrollmentTests;

public class EnrolleeSeparatorTests
{
    [Theory]
    [InlineData("Some Company", "1", 1, "Another Company", "1", 1, 1)]
    [InlineData("Some Company", "1", 1, "Some Company", "1", 2, 1)]
    [InlineData("Some Company", "1", 1, "Some Company", "2", 1, 2)]
    public void EnrolleeSeparatorTest(string company1, string id1, int version1, string company2, string id2, int version2, int expected)
    {
        var enrollees = new List<Enrollee>
        {
            new Enrollee { Company = company1, Id = id1, Version = version1, Name = "Alice Bob" },
            new Enrollee { Company = company2, Id = id2, Version = version2, Name = "Bob Alice" }
        };

        var separated = EnrolleeSeparator.Separate(enrollees);
        var actual = separated[company1].Count;

        Assert.Equal(expected, actual);
    }
}