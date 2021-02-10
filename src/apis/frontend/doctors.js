const PROFESSIONAL_LICENSE='professional';

// Frontend api controller for user list
// Dependencies:
// - usersService: The persistent data access service for users
// - licensesService: The persistent data access service for licenses
// - specialtiesService: The persistent data access service for specialties
// - userRolesService: The persistent data access service for userRoles
// - rolesService: The persistent data access service for roles
module.exports = (usersService,licensesService,specialtiesService,userRolesService,rolesService) => ({
    get : async (req, res, next) => {
        var author = res.locals.author;
        var id = req.params.id;

        var users = await usersService.readAll(author);
        var licenses = await licensesService.readAll(author);
        var specialties = await specialtiesService.readAll(author);
        var userRoles = await userRolesService.readAll(author);
        var roles = await rolesService.readAll(author);
        
        var user=users.find(user=>user.id==id)
        var myRoles=roles
            .filter(role => userRoles.some(userRole=>userRole.user==user.id&&userRole.role==role.id))
            .map(role => role.name);
        var myLicenses=licenses.filter(license=>license.user==user.id);
        var myProfessionalLicense=myLicenses.find(license=>license.type==PROFESSIONAL_LICENSE);
        var mySpecialties=specialties
            .filter(specialty=>myLicenses.some(license=>specialty.license==license.id))
            .map(specialty=>specialty.field);
        var result={
            id: user.id,
            usuario: user.username,
            contrasenia: '',
            cargo:myRoles,
            medico:{
                id: user.id,
                nombre: `${user.first_name} ${user.last_name}`,
                cedula: myProfessionalLicense.code,
                universidad: myProfessionalLicense.college,
                turno: user.shift,
                direccion: '',
                especialidad: mySpecialties,
            },
        };
        res.send(result);
    },
});