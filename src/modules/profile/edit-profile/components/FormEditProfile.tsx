export const FormEditProfile = ()=>{

    return (
        <Input
                label="Profile Name"
                onChange={e => setName(e.target.value)}
                value={name}
                disabled={isLoading}
              />
            </div>
            <div className={styles.actions}>
              <Button fullWidth onClick={handleSave} disabled={isDisabled}>
                Done
              </Button>
              <Button variant="subtle" onClick={() => navigate(`/delete-profile/${id}`)}>
                Delete Profile
              </Button>
            </div>
    )
}